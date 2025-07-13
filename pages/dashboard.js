import Link from 'next/link';
import Image from 'next/Image';
import mahindrabe6 from './mahindrabe6.webp';
import mahindrathar from './mahindrathar.webp';
import tatanexon from './tatanexon.webp';
import volkswagonvirtus from './volkswagonvirtus.webp';
export default function Dashboard() {
  return (
    <div className="container">
      <h1 className="title">Welcome to Dashboard</h1>
      <div className="button-group">
        <Link href="/rent" className="button">Rent a Car</Link>
        <Link href="/give" className="button">Give a Car for Rent</Link>
      </div>
      <div className="collector">
      <div className="imgcollector">
    <Image src={mahindrabe6} alt="Car 1"/>
    <Image src={mahindrathar} alt="Car 2"/>
    <Image src={tatanexon} alt="Car 3"/>
    <Image src={volkswagonvirtus} alt="Car 4"/>
      </div>
    </div>
    </div>  
  );
}