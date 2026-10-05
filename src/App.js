import { useState } from 'react';
import Light from './light';

function App() {
  const [isLightOn, setIsLightOn] = useState(false);

  return (
    <div className="App">
      <h1>Room Light Control</h1>
      <Light isOn={isLightOn} toggleLight={() => setIsLightOn(!isLightOn)} />
    </div>
  );
}

export default App;
