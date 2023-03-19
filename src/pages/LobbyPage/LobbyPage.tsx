import {
  useContext,
  useState,
  useEffect
} from 'react';
import clsx from 'clsx';
import { SignalRContext } from '../../app/signalr';
import { useAppSelector } from '../../app/utils/appUtils';
import { selectCurrentUsername } from '../../app/utils/authUtils';
import {
  UserList,
  GameSetupPane
} from '../../components';
import { PrivatePageStyle } from '../CommonStyle';
import { useTranslation } from 'react-i18next';

interface AllOnlineUsersMessage
{
  users: string[]
}

function LobbyPage() {
  const { t } = useTranslation(['lobby']);
  const currentUsername = useAppSelector(selectCurrentUsername);
  const signalRConnection = useContext(SignalRContext);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const [selectedOnlineUser, setSelectedOnlineUser] = useState<string | undefined>(undefined);
  const [inviteUsers/*, setInviteUsers*/] = useState<string[]>([]);

  useEffect(() => {
    signalRConnection?.on('ReceiveAllOnlineUsersMessage', (message: AllOnlineUsersMessage) => {
      setOnlineUsers(message.users);
    });

    signalRConnection?.send('SendUserOnlineMessage', { username: currentUsername })
      .catch(e => console.log(e));
  }, []);

  const handleOnlineUserClick = (user: string) => {
    setSelectedOnlineUser(user);
  };

  return (
    <main className={clsx(PrivatePageStyle)}>
      <h3 className='tw-text-center'>
        {t('lobby:title')}
      </h3>
      <div className='tw-flex tw-h-full tw-gap-x-2'>
        <section className='tw-w-1/4 tw-grid tw-gap-y-2'>
          <UserList
            label={t('lobby:onlineUsers')}
            users={onlineUsers}
            onUserClick={handleOnlineUserClick}
          />
          <UserList
            label={t('lobby:gameInvitations')}
            users={inviteUsers}
            onUserClick={() => console.log('TODO!')}
          />
        </section>
        <section className='tw-w-3/4 tw-grid'>
          {
            selectedOnlineUser &&
            <GameSetupPane opponent={selectedOnlineUser} />
          }
        </section>
      </div>
    </main>
  );
}

export default LobbyPage;