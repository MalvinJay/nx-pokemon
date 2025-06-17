'use client';

import { useCallback, useEffect, useState } from 'react';
import styles from './page.module.css';
import type { Pokemon } from '@nx-pokemon-1/shared-types';

export default async function Index() {
  const [search, setSearch] = useState('');
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const handleSearch = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(evt.target.value);
    },
    []
  );

  useEffect(() => {
    console.log('homepage effect running....');
    fetch(`http://localhost:3333/api/search?q=${search}`)
      .then((res) => res.json())
      .then((payload) => {
        setPokemons(payload);
      });
  }, [search]);

  console.log('homepage re-rending...');

  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>Welcome next-pokemon 👋</h1>
            <p style={{ paddingTop: '2rem' }}>Serch for your Pokemons!!</p>

            <div>
              <input
                type="text"
                style={{ border: '1px solid', height: '1.5rem' }}
                onChange={handleSearch}
              />
            </div>
            <div>
              Pokemons: <br />
              <ul>
                {pokemons?.map(({ name: { english }, id }) => (
                  <li key={id}>{english}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
