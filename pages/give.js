import { useState } from 'react';

export default function Give() {
  const [car, setCar] = useState({ name: '', description: '', image: '', from: '', to: '' });

  const handleSubmit = async () => {
    await fetch('http://localhost:5000/api/cars', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car)
    });
    alert('Car submitted!');
    setCar({ name: '', description: '', image: '', from: '', to: '' });
  };

  return (
    <div className="container">
      <h1 className="title">Give a Car for Rent</h1>
      <div className="input-group">
        <input placeholder="Car Name" value={car.name} onChange={(e) => setCar({ ...car, name: e.target.value })} />
        <input placeholder="Description" value={car.description} onChange={(e) => setCar({ ...car, description: e.target.value })} />
        <input placeholder="Image URL" value={car.image} onChange={(e) => setCar({ ...car, image: e.target.value })} />
        <input placeholder="from" type="date" value={car.from} onChange={(e) => setCar({ ...car, from: e.target.value })} />
        <input placeholder="to" type="date" value={car.to} onChange={(e) => setCar({ ...car, to: e.target.value })} />
        <button className="button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}