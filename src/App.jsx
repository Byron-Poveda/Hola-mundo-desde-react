import React, { useState, useEffect } from 'react';
import './App.css';
import TwitterFollowCard from './components/TwitterFollowCard';

function App() {
  const formatUserName = (userName) => `@${userName}`;

  const UsersData = [
    {
      id: 1,
      userName: 'ByronPoveda',
      name: 'Byron Poveda Villamil',
      isFollowing: false,
    },
    {
      id: 2,
      userName: 'midulive',
      name: 'Miguel Angel Durán',
      isFollowing: true,
    },
    { id: 3, userName: 'kikobeats', name: 'kikobeats', isFollowing: false },
    { id: 4, userName: 'ElonkMusk', name: 'Elonk Musk', isFollowing: false },
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="app">
      {UsersData.map(({ userName, name, isFollowing, id }) => (
        <TwitterFollowCard
          formatUserName={formatUserName}
          userName={userName}
          name={name}
          initialIsFollowing={isFollowing}
          key={id}
        />
      ))}
      <h1 style={{ color: '#fff' }}>Consumiendo una API</h1>
      {data.map((pokemon) => (
        <TwitterFollowCard
          formatUserName={formatUserName}
          userName={pokemon.name}
          name={pokemon.name}
          key={pokemon.name}
        />
      ))}
    </div>
  );
}

export default App;
