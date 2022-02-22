import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Ana', age: 35 },
  { name: 'Ivana', age: 32 },
  { name: 'Dario', age: 31 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const handleSearch = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  return (
    <div>
      User search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSearch}>Search for user</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
