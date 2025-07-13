const express = require('express');
const mongoose = require('mongoose');
const Car = require('./models/Car');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/rentalcar', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'));

app.get('/api/cars', async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
});

app.post('/api/cars', async (req, res) => {
  const newCar = new Car(req.body);
  await newCar.save();
  res.json({ message: 'Car saved' });
});

// New route to mark a car as rented
app.patch('/api/cars/:id/rent', async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(
      req.params.id,
      { rented: true },
      { new: true }
    );
    res.status(200).json(car);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to rent car' });
  }
});

app.patch('/api/cars/:id/return', async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(
      req.params.id,
      { rented: false },
      { new: true }
    );
    res.status(200).json(car);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to return car' });
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});