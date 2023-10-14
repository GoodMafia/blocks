import './Css/App.css';
import Third from './Components/Third/Third';
import { buildQueries } from '@testing-library/react';

const blocks = [{speed: 10, price: 300, color: 'blue'}, {speed: 50, price: 450, color: 'green'}, {speed: 100, price: 550, color: 'red'}, {spped: 200, price: 1000, color: 'black'}];

function App() {
  return (
    <div className="App">
        <Third speed={blocks[0].speed} price={blocks[0].price} color={blocks[0].color}/>
        <Third speed={blocks[1].speed} price={blocks[1].price} color={blocks[1].color}/>
        <Third speed={blocks[2].speed} price={blocks[2].price} color={blocks[2].color}/>
        <Third speed={blocks[3].speed} price={blocks[3].price} color={blocks[3].color}/>
    </div>
  );
}

export default App;
