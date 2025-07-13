import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Rent() {
  const [cars, setCars] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('http://localhost:5000/api/cars')
      .then(res => res.json())
      .then(data => {
        const availableCars = data.filter(car => !car.rented);
        setCars(availableCars);
      });
  }, []);

  const handleRent = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/cars/${id}/rent`, {
        method: 'PATCH'
      });

      if (res.ok) {
        const updatedCar = await res.json();
        setCars(prev => prev.filter(car => car._id !== updatedCar._id));
      }
    } catch (error) {
      console.error('Error in renting car:', error);
    }
  };

  return (
    <div className="rentcontainer">
      <h1 className="title">Available Cars</h1>

      <button className="button"
        onClick={() => router.push('/rented')}
      >
        View Rented Cars
      </button>
      <button className="button"  onClick={() =>(alert(1000101010))}><strong>SORT A - Z</strong></button>

      <div className="button-group" >
        {cars.map((car) => (
          <div key={car._id} style={{ background: '#fff', padding: '1rem', borderRadius: '10px', marginBottom: '1rem' }}>
            <img src={car.image} alt={car.name} style={{ width: '300px' }} />
            <h2>{car.name}</h2>
            <p>{car.description}</p>
            <p><strong>Available:</strong> {car.from} to {car.to}</p>
            <button className="button" onClick={() => handleRent(car._id)}>Rent this car</button>
          </div>
        ))}
      </div>
    </div>
  );
}
