import "./NumberOfPets.css";
import React from 'react'
import {useState} from 'react'


const NumberOfPets = () => {
  
  let [count, setCount] = useState(1)

  const handleCounter = (event) => {

    if (count <= 0 && event.target.id === 'less') {
      return null
    }
    setCount(count = event.target.id === 'less' ? count -1: count + 1)
  }


  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{count}</h5>
      <div>
        <button onClick={handleCounter} id="less">
          -
        </button>
        <button onClick={handleCounter} id="more">
          +
        </button>
      </div>
    </section>
  );
}

export default NumberOfPets