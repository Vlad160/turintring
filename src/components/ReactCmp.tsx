import React, { useCallback } from 'react';
import { useState } from 'react';

const ReactCmp = () => {
	const [input, setInput] = useState('');

	const handleChange = useCallback((e) => {
		setInput(e.target.value);
	}, []);

	return <div>
		<h2>React App</h2>
		<input value={input} onChange={handleChange}/>
		<div>Hello {input}!</div>
	</div>;
};

export default ReactCmp;