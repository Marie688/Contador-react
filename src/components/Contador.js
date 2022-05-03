import { useEffect, useState } from "react"

const Contador = () => {
    const valorInicial = 100;
    const [cuenta, setCuenta] = useState (valorInicial);
    const aumentar = () => {
        setCuenta (cuenta + 1);
    };
   
    const disminuir = () => {
        setCuenta (cuenta - 1);
       
};

    const reset = () => {
        setCuenta (valorInicial);

    }

    useEffect (() => {
        console.log (`El contador va en  ${cuenta}`)
    },[cuenta]);
    

    return (
      <div>
        <center>
          <h1>{cuenta} </h1>
          <button onClick={aumentar}>Aumentar</button>
          <button onClick={disminuir}>Disminuir</button>
          <button onClick={reset}>Reset</button>
        </center>
      </div>
    );
 };

export default Contador; 