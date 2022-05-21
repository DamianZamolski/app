import useMount from './useMount';
import post from './post';

export default function App() {
  useMount(() => {
    post('http://localhost:3000/champions', { name: 'dupa' });
  });
  return <div>App</div>;
}
