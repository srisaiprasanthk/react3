import './App.css';
import ColorPicker from './Components3/ColorPicker';
import './Components3/ColorPicker.css';

function App() {
  const colors = ["red", "blue", "green", "yellow", "purple"];
  return (
    <div className="App">
      <h1>Color Picker App</h1>
      <ColorPicker colors={colors} />
    </div>

  );
}

export default App;