const express = require('express');
const fs = require('fs/promises');

const app = express();
const PORT = 3000;
const DB_FILE = 'movies.json';

app.use(express.json());

// Find all movies
app.get('/movies', async (req, res) => {
  try {
    const data = await readData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Find a single movie
app.get('/movies/:id', async (req, res) => {
  const movieId = req.params.id;
  try {
    const data = await readData();
    const movie = data.find((m) => m.id === movieId);

    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ error: 'Movie not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a movie
app.post('/movies', async (req, res) => {
  const newMovie = req.body;
  try {
    const data = await readData();
    data.push(newMovie);
    await writeData(data);
    res.json({ message: 'Movie created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update an existing movie
app.put('/movies/:id', async (req, res) => {
  const movieId = req.params.id;
  const updatedMovie = req.body;
  try {
    let data = await readData();
    const index = data.findIndex((m) => m.id === movieId);

    if (index !== -1) {
      data[index] = { ...data[index], ...updatedMovie };
      await writeData(data);
      res.json({ message: 'Movie updated successfully' });
    } else {
      res.status(404).json({ error: 'Movie not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete an existing movie
app.delete('/movies/:id', async (req, res) => {
  const movieId = req.params.id;
  try {
    let data = await readData();
    const index = data.findIndex((m) => m.id === movieId);

    if (index !== -1) {
      data.splice(index, 1);
      await writeData(data);
      res.json({ message: 'Movie deleted successfully' });
    } else {
      res.status(404).json({ error: 'Movie not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Helper functions
async function readData() {
  const content = await fs.readFile(DB_FILE, 'utf-8');
  return JSON.parse(content);
}

async function writeData(data) {
  await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2));
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
