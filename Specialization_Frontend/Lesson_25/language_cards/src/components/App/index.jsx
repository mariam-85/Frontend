import { words } from "../../data/words";
import CardsContainer from "../CardsContainer";

export default function App() {
    
    return (

      <div>
          {
              <CardsContainer words_array={words} />
          }

      </div>
    );
  }
  