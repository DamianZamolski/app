import { useEffect } from 'react';
import post from './post';

export default function App() {
  useEffect(() => {
    post('http://localhost:3000');
  }, []);
  return <div>App</div>;
}
