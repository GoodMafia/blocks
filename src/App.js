import './Css/App.css';
import Third from './Components/Third/Third';

function App() {
  return (
    <div className="App">
        <Third speed="10" price="300" color="blue"/>
        <Third speed="50" price="450" color="green"/>
        <Third speed="100" price="550" color="red"/>
        <Third speed="200" price="1000" color="black"/>
    </div>
  );
}

export default App;
