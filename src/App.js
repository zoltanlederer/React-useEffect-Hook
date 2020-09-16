import React, {useState, useEffect, useRef} from 'react';

/*
const LogEffect = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('latest value:', text)
  });

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
    </div>
  );
};
*/

/*
const App = () => {
  // Store a reference to the input's DOM node
  const inputRef = useRef();

  // Store the input's value in state
  const [value, setValue] = useState('');

  useEffect(() => {
    // This runs AFER the first render,
    // so the ref is already set
    console.log('render');
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );

}
*/

/*
Render an input box and store its value with useState. Then set the document.title in an
effect, keeping the page’s title in sync with the input.
*/

const App = () => {
  const [input, setInput] = useState('1 Title');
  // console.log(input);
  
  useEffect(() => {
    document.title = input;
  }, [input]);

  return (
    <div>
      {/* <input onChange={e => setInput(e.target.value)} /> */}
      <input onChange={e => setInput(e.target.value)} />
    </div>
  );

};

export default App;
