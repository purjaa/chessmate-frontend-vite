import React, {
  useState
} from 'react';
import clsx from 'clsx';

interface UserListProps {
  label: string;
  users: string[];
  onUserClick: () => void;
}

function UserList(props: UserListProps) {
  const { label, users, onUserClick } = props;

  const [active, setActive] = useState('');

  const activeStyle = [
    'tw-bg-ocean-500',
    'tw-text-white',
    'tw-cursor-default'
  ];

  const handleUserClick = ((user: string) => {
    setActive(user);
    onUserClick();
  });

  return (
    <div className='tw-bg-white tw-rounded-md tw-shadow-lg'>
      <h3 className='tw-text-center'>
        {label}
      </h3>
      <ul className='tw-h-[30vh] tw-p-2 tw-overflow-auto'>
        {users.map(user => (
          <li
            className={clsx(active === user ? activeStyle : 'tw-cursor-pointer')}
            key={user}
            onClick={() => handleUserClick(user)}>
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;