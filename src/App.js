import './App.css';
import Channel from './components/Channel';
import { useState } from 'react';

export const audioContext = new AudioContext();
export const out = audioContext.destination;
export const primaryGainControl = audioContext.createGain();
primaryGainControl.gain.setValueAtTime(0.95,0);
primaryGainControl.connect(out);

function App() {
  const [FILE, setFILE] = useState();
  const [gainVal, setGainVal] = useState();
  
  return (
    <div>
      <Channel></Channel>
    </div>
  );
}

export default App;
