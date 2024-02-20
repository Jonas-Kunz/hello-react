import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here
  const { reset } = props;
  const handleClick = () => {
    reset();
  }
  return (
    <button onClick={handleClick}>{props.children}</button>
  )
};

const Application = () => {
  const [name, setName ] = useState("")
  // your code here

  const reset = () => {
    setName("")
  };

  return (
    <main>
      <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Type your name"></input>
      <Button reset={reset}>Reset</Button>
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
