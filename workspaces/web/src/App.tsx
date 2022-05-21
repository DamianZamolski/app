import useMount from './useMount';
import get from './get';

export default function App() {
  useMount(() => {
    get('http://localhost:3000/postgresql');
  });
  return <div>App</div>;
}
