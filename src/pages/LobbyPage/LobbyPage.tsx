import React, { useContext } from 'react';
import { SignalRContext } from '../../app/signalr';

function LobbyPage() {

  const signalRConnection = useContext(SignalRContext);

  return (
    <div>
      <div>Lobby Page</div>
      <div>
        { signalRConnection?.state }
      </div>
    </div>
  );
}

export default LobbyPage;