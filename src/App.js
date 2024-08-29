import './App.css';
import { useState } from "react";
import NuevoMensajeComponente from "./Componentes/NuevoMensajeComponente.js";
import ListaMensajesComponente from "./Componentes/ListaMensajesComponente.js";

function App() {
    const [refresh, setRefresh] = useState(false);

    const onMensajeAgregado = () => {
        setRefresh(!refresh);  // Cambia el estado para forzar la actualización de la lista
    }

    return (
        <div className="app-container">
            <div className='main-content'>
                <NuevoMensajeComponente onMensajeAgregado={onMensajeAgregado} />
                <ListaMensajesComponente key={refresh} />
            </div>
            <footer className='footer'>
                <p>© 2024-2 Patrones Avanzados de Arquitectura (Proyecto K8S)</p>
            </footer>
        </div>
    );
}

export default App;