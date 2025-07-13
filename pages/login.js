import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      router.push('/dashboard');
    } else {
      setError('Login failed');
    }
  };

  return (
    <div className="loginpage">
      <div className="login">
      <h1 className="title">Login</h1>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="button" onClick={handleLogin}>Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    </div>
  );
}