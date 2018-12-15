import React, { useContext } from 'react';
import { CountCtx } from '../App';

const Counter = () => {
	const count = useContext(CountCtx);
	return <div>Counter is {count}</div>;
};

export default Counter;
