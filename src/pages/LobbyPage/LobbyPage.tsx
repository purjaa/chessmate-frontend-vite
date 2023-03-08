import {
  useContext,
  useState,
  useEffect
} from 'react';
import { SignalRContext } from '../../app/signalr';
import { useAppSelector } from '../../app/utils/appUtils';
import { selectCurrentUsername } from '../../app/utils/authUtils';
import { UserList } from '../../components';

interface AllOnlineUsersMessage
{
  users: string[]
}

function LobbyPage() {
  const currentUsername = useAppSelector(selectCurrentUsername);
  const signalRConnection = useContext(SignalRContext);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);

  useEffect(() => {
    signalRConnection?.on('ReceiveAllOnlineUsersMessage', (message: AllOnlineUsersMessage) => {
      setOnlineUsers(message.users);
    });

    void signalRConnection?.send('SendUserOnlineMessage', { username: currentUsername });
  }, []);

  return (
    <div>
      <div>Lobby Page</div>
      <div>
        { signalRConnection?.state }
      </div>
      <UserList
        users={onlineUsers}
        onUserClick={() => console.log('click!')}
      />
    </div>
  );
}

export default LobbyPage;