import React, { useState } from 'react';
import MensajeService from "../Servicios/MensajeService.js";
import { Link, useNavigate, useParams } from "react-router-dom";

export const NuevoMensajeComponente = ({ onMensajeAgregado }) => {

    const [mensaje, setMensaje] = useState('');

    const createMensaje = (e) => {
        e.preventDefault();
        const texto = {mensaje}
        MensajeService.createMensaje(texto).then((response) => {
            console.log(response.data);
            setMensaje(''); 
            onMensajeAgregado();  
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div className='card col-md-6 offset-md-3 offset-md-3 mb-4'>
            <h2 className='text-center'>Agregar Mensaje</h2>
            <div className='card-body'>
                <form>
                    <div className='form-group mb-2'>
                        <input
                            type='text'
                            placeholder='Digite su mensajito'
                            name='mensajito'
                            className='form-control'
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success' onClick={createMensaje}>Guardar</button>
                </form>
            </div>
        </div>
    );
}

export default NuevoMensajeComponente;
