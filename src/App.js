import { useState } from "react";
import adivinanzas from "./adivinanzas.json";
import './App.css';

function App() {
  var [t, setT]=useState("")
  var [yesOrNo, yesOrNoSet] = useState("")
  var advina = adivinanzas[Math.floor(Math.random() * adivinanzas.length)]
  return (
    <div className="App">
      <p>Hola introduce la respuesta de la adivinaza y haz doble click en la caja de texto para corregir</p>
      <h1>{advina.req}</h1>
      <input placeholder="respuesta" onChange={e => { setT(e.target.value); } } />
      <button onClick={() => {if (t === advina.res){
          yesOrNoSet("Correcto, reinicia la pagina para obtener otra adivinaza")
        }else{
          yesOrNoSet("Incorrecto, intentalo otra vez")
        }} }>Coregir</button><p>{yesOrNo}</p>
    </div>
  );
}

export default App;
