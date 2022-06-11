import './App.css';
import { createContext, useState } from 'react';
import Button from './components/progress/button';
import Counter from './components/counter/counter';

export  const CounterContext = createContext('defoultContext')
function App() {
  const [counter, setCounter] = useState(0)
  return (
    <CounterContext.Provider value={counter}>
      <div className="App">
        <Button title="Incriment" color={'#0dbd3c'} onClick={() => setCounter((prev) => prev+= 1)} />
        <Counter />
        <Button title="Decriment" color={'red'} onClick={() => setCounter((prev) => prev-= 1)} />
      </div>
    </CounterContext.Provider>

  );
}

export default App;
