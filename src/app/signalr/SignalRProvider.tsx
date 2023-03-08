import React, {
  useState,
  useEffect,
  createContext
} from 'react';
import {
  HubConnection,
  HubConnectionBuilder
} from '@microsoft/signalr';

const SignalRContext = createContext<null | HubConnection>(null);

interface SignalrProviderProps {
  children: React.ReactNode;
}

const SignalRProvider: React.FC<SignalrProviderProps> = ({ children }) => {

  const [connection, setConnection] = useState<null | HubConnection>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  useEffect(() => {
    const connect = new HubConnectionBuilder()
      .withUrl(`${import.meta.env.VITE_API_URL_BASE}/hubs/lobby`)
      .withAutomaticReconnect()
      .build();

    setConnection(connect);

    return () => {
      connect.stop()
        .then(() => {
          console.log('Disconnected!');
        })
        .catch(e => console.log('Disconnection failed: ', e));
    };
  }, []);

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => {
          console.log('Connected!');
          setIsConnected(true);
        })
        .catch((error) => console.log(error));
    }
  }, [connection]);

  if (isConnected) {
    return (
      <SignalRContext.Provider value={ connection }>
        {children}
      </SignalRContext.Provider>
    );
  }
  else {
    return (
      <div>Loading...</div>
    );
  }
};

export default SignalRProvider;
export { SignalRContext };
