import { useDispatch } from 'react-redux';
import './App.css';
import Comments from './components/commets/comments';
import { nextData } from './redux/feuters/commentsSlice/comments';


function App() {
  const dispatch  = useDispatch()

  return (
    <div className="App">
      <Comments/>
      <button type='button' onClick={() =>  dispatch(nextData())}>NEXT</button>
    </div> 
  );
}

export default App;
