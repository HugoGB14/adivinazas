import { useState, useEffect } from "react";
import adivinanzas from "./adivinanzas.json";
import './App.css';

function App() {
  const [t, setT] = useState("");
  const [yesOrNo, yesOrNoSet] = useState("");
  const [advina, setAdvina] = useState(null);

  // Función para seleccionar una adivinanza aleatoria al inicio
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * adivinanzas.length);
    setAdvina(adivinanzas[randomIndex]);
  }, []);

  const handleCorregirClick = () => {
    if (t === advina.res) {
      yesOrNoSet("Correcto, reiniciando la página en 2 segundos...");
      // Espera 5 segundos antes de recargar la página
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      yesOrNoSet("Incorrecto, inténtalo otra vez");
    }
  };

  return (
    <div className="App">
      <p>Hola introduce la respuesta de la adivinanza y haz doble click en la caja de texto para corregir</p>
      {advina && <h1>{advina.req}</h1>}
      <input placeholder="respuesta" onChange={e => setT(e.target.value)} />
      <button onClick={handleCorregirClick}>Corregir</button>
      <p>{yesOrNo}</p>
    </div>
  );
}

export default App;