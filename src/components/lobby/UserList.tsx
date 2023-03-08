import React from 'react';

interface UserListProps {
  users: string[];
  onUserClick: () => void;
}

function UserList(props: UserListProps) {
  const { users, onUserClick } = props;

  return (
    <div>
      <label>User List</label>
      <ul>
        {users.map(user => (
          <li key={user} onClick={onUserClick}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;