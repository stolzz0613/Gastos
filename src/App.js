import React, { useState, useEffect } from 'react';
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);


  useEffect(() => {
    if (crearGasto) {
      setGastos([
        ...gastos,
        gasto
      ]);

      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);
      setCrearGasto(false);
    }
  }, [gasto, crearGasto, gastos, restante])

  const eliminar = (id) => {
    const nuevoGasto = gastos.filter(gasto => gasto.id !== id)
    let nuevoPresupuesto = 0;
    setGastos(nuevoGasto);

    nuevoGasto.map((gasto) => {
      nuevoPresupuesto = nuevoPresupuesto + gasto.cantidad
      return nuevoPresupuesto
    })
    setRestante(presupuesto - nuevoPresupuesto)
  }


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta
            ?
            (<Pregunta
              setMostrarPregunta={setMostrarPregunta}
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
            />) : (
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    setGasto={setGasto}
                    setCrearGasto={setCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                    eliminar={eliminar}
                  />
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            )}
        </div>
      </header>
    </div>
  );
}

export default App;
