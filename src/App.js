import React, { useState, createContext } from 'react';
import Counter from './components/Counter';
import './App.css';

export const CountCtx = createContext([ 0, () => {} ]);

const App = () => {
	const [ count, setCount ] = useState(0);

	return (
		<div className="App">
			<CountCtx.Provider value={[ count, setCount ]}>
				<Counter />
				<button onClick={() => setCount(count + 1)}>+1</button>
				<button onClick={() => (count > 0 ? setCount(count - 1) : 0)}>-1</button>
			</CountCtx.Provider>
		</div>
	);
};

export default App;
