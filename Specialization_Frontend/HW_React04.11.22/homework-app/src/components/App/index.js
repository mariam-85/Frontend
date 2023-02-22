import Word from '../Word';
import { words } from '../../data/words';
export default function App() {
  return (
    <div>

      {
        words.map(el => <Word {...el} key={el.id}/>)
      }

    </div>
  );
}

