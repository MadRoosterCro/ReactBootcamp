import { useState } from 'react';

const users = [
  { name: 'Ana', age: 35 },
  { name: 'Ivana', age: 32 },
  { name: 'Dario', age: 31 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const handleSearch = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      User search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSearch}>Search for user</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
