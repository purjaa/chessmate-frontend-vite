import {
  useContext,
  useState,
  useEffect
} from 'react';
import clsx from 'clsx';
import { SignalRContext } from '../../app/signalr';
import { useAppSelector } from '../../app/utils/appUtils';
import { selectCurrentUsername } from '../../app/utils/authUtils';
import { UserList } from '../../components';
import { PrivatePageStyle } from '../CommonStyle';

interface AllOnlineUsersMessage
{
  users: string[]
}

function LobbyPage() {
  const currentUsername = useAppSelector(selectCurrentUsername);
  const signalRConnection = useContext(SignalRContext);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const [inviteUsers/*, setInviteUsers*/] = useState<string[]>([]);

  useEffect(() => {
    signalRConnection?.on('ReceiveAllOnlineUsersMessage', (message: AllOnlineUsersMessage) => {
      setOnlineUsers(message.users);
    });

    signalRConnection?.send('SendUserOnlineMessage', { username: currentUsername })
      .catch(e => console.log(e));
  }, []);

  return (
    <main className={clsx(PrivatePageStyle)}>
      <h3 className='tw-text-center'>Welcome to Chessmate! Challenge an opponent from Online Users or accept an invitation from Invitations.</h3>
      <div className='tw-flex tw-h-full'>
        <section className='tw-w-1/4 tw-grid tw-gap-y-2'>
          <UserList
            label='Online Users'
            users={onlineUsers}
            onUserClick={() => console.log('click!')}
          />
          <UserList
            label='Invitations'
            users={inviteUsers}
            onUserClick={() => console.log('click!')}
          />
        </section>
      </div>
    </main>
  );
}

export default LobbyPage;