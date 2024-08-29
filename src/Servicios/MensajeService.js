import axios from "axios";
const MENSAJE_API_URL = "http://localhost:8080/api/mensajes";

class MensajeService {

    createMensaje(mensaje) {
        return axios.post(MENSAJE_API_URL, mensaje);
    }

    getAllMensajes() {
        return axios.get(MENSAJE_API_URL);
    }

}

export default new MensajeService();