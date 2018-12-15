import React, { useContext } from 'react';
import { CountCtx } from '../App';

const Counter = () => {
	const [ count, setCounter ] = useContext(CountCtx);
	return (
		<div>
			<p>Counter is {count}</p>
			<button onClick={() => setCounter(count + 5)}>+5</button>
			<button onClick={() => setCounter(count > 0 ? count - 5 : 0)}>-5</button>
		</div>
	);
};

export default Counter;
