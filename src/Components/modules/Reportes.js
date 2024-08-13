import { Fragment, React } from "react";
import "../styles/Repotes.css";

export function Reportes() {


    return (
        <Fragment>
            <div className="main-ontainer">
                <span>Reportes</span>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Tipo Reporte</th>
                            <th>Comentario</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Juan Rodriguez</td>
                            <td>Reclamo</td>
                            <td>El dia de hoy se fue la luz y no se retrazo la salida del edificio.</td>
                        </tr>
                        <tr>
                            <td>Juan Rodriguez</td>
                            <td>Reclamo</td>
                            <td>El día de hoy se fue la luz y se retrasó la salida del edificio.</td>
                        </tr>
                        <tr>
                            <td>Maria Lopez</td>
                            <td>Petición</td>
                            <td>Solicito el cambio de celular para el manejo de mi carné.</td>
                        </tr>
                        <tr>
                            <td>Carlos Perez</td>
                            <td>Queja</td>
                            <td>El aire acondicionado del auditorio no funciona correctamente.</td>
                        </tr>
                        <tr>
                            <td>Ana Garcia</td>
                            <td>Sugerencia</td>
                            <td>Sería útil tener un tablero de anuncios electrónicos en la entrada principal.</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </Fragment>
    );
}