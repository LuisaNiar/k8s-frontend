import React, { useEffect, useState } from "react";
import MensajeService from "../Servicios/MensajeService.js";
import { Link } from "react-router-dom";

export const ListEmpleadosComponent = () => {
    const [mensajes, setMensajes] = useState([]);

    useEffect(() => {
        listarMensajes();
    }, []);

    const listarMensajes = () => {
        MensajeService.getAllMensajes()
            .then(response => {
                setMensajes(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className='card col-md-12'>
            <h2 className='text-center'>Lista de Mensajitos</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Mensaje</th>
                    </tr>
                </thead>
                <tbody>
                    {mensajes.map(mensaje => (
                        <tr key={mensaje.id}>
                            <td>{mensaje.id}</td>
                            <td>{mensaje.mensaje}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListEmpleadosComponent;
