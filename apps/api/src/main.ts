import express from 'express';
import cors from 'cors';
import * as path from 'path';
import { pokemon } from './pokemon';

const app = express();

app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to Pokemon API!' });
});

app.get('/api/pokemon', (req, res) => {
  res.send({ pokemons: pokemon });
});

app.get('/api/search', (req, res) => {
  const q = (req.query.q) as string ?? ''
  res.send(
    pokemon.filter(({ name: { english } }) =>
      english.toLowerCase().includes(q.toLowerCase())
    )
  );
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
