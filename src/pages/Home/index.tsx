import React, { useState } from 'react'
import { Button } from '../../components';

const Home = () => {
  const [count, setCount] = useState<number>(100);

  const incrementar = () => {
    setCount(count + 10);
  }

  const reiniciar = () => {
    setCount(100);
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-10">
        <p>{count}</p>

        <Button onClick={incrementar}>
          Incrementador
        </Button>

        <Button variant='outlined' onClick={reiniciar}>
          Reiniciar
        </Button>
      </div>
    </div>
  )
}

export default Home;