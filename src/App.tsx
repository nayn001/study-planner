import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>履修相談Assistant</h1>
      <table>
        <tr>
          <th>時限</th>
          <th>月</th>
          <th>火</th>
        </tr>
      </table>
    </>
  );
}

export default App;
