import React from 'react';
import { useRandom } from './useRandom';

const RandomApp: React.FC = () => {
  const [value, setNewRandom] = useRandom();

  return (
    <div>
      <button onClick={() => setNewRandom(0, 100)}>New</button>
      <p data-testid='value'>
        {value === 7 ? `Lucky ${value}` : value}
      </p>
    </div>
  );
};

export default RandomApp;