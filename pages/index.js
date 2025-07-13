import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">Car Rental Portal</h1>
      <div className="button-group">
        <Link href="/login" className="button">Login</Link>
      </div>
    </div>
  );
}