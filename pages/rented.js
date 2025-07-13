import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function RentedCars() {
  const [cars, setCars] = useState([]);
  const router = useRouter();  // Initialize useRouter hook for navigation

  useEffect(() => {
    fetch('http://localhost:5000/api/cars')
      .then(res => res.json())
      .then(data => {
        const rentedCars = data.filter(car => car.rented);
        setCars(rentedCars);
      });
  }, []);

  const handleReturn = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/cars/${id}/return`, {
        method: 'PATCH'
      });

      if (res.ok) {
        const returnedCar = await res.json();
        setCars(prev => prev.filter(car => car._id !== returnedCar._id));
      }
    } catch (error) {
      console.error('Error returning car:', error);
    }
  };

  const handleNavigateToRent = () => {
    router.push('/rent');  // Redirect to the rent page
  };

  return (
    <div className="container">
      <h1 className="title">Rented Cars</h1>
      <div className="button-group">
        {cars.length === 0 && <p>No cars are rented currently.</p>}
        {cars.map((car) => (
          <div key={car._id} style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '10px', marginBottom: '1rem' }}>
            <img src={car.image} alt={car.name} style={{ width: '300px' }} />
            <h2>{car.name}</h2>
            <p>{car.description}</p>
            <p><strong>Rented Period:</strong> {car.from} to {car.to}</p>
            <p style={{ color: 'red', fontWeight: 'bold' }}>Status: Rented</p>
            <button className="button" onClick={() => handleReturn(car._id)}>Return Car</button>
          </div>
        ))}
      </div>
      <button className="button" onClick={handleNavigateToRent}>
          Return to Rent Page
        </button>
    </div>
  );
}
