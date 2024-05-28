import { Fragment, React } from "react";
import '../styles/MainPage.css';
import circStudents from '../images/circ_estudents.png';
import chuloAdmin from '../images/chulo-admin.png';

export function MainPage() {
    return (
        <Fragment>
            <div className="main-ontainer">
                <span>Ingresos mas recientes</span>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Cargo</th>
                            <th>Edad</th>
                            <th>Nickname</th>
                            <th>Vehiculo parqueado</th>
                            <th>Tipo de usuario</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Giacomo guilizzoni</td>
                            <td>founder & CEO</td>
                            <td>40</td>
                            <td>Giacomo</td>
                            <td>No</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Elmira  Anosgrande</td>
                            <td>Docente</td>
                            <td>26</td>
                            <td>ElanoGrande</td>
                            <td>Si</td>
                            <td className="employee">
                                <img></img>
                            </td>
                        </tr>
                        <tr>
                            <td>Yasemu Rio</td>
                            <td>Estudiante</td>
                            <td>28</td>
                            <td>Zombie</td>
                            <td>No</td>
                            <td className="employee">
                                <img src={circStudents} className="circStu"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Eldino Saurio</td>
                            <td>Administrativo</td>
                            <td>38</td>
                            <td>TRex</td>
                            <td>No</td>
                            <td className="employee">
                                <img src={chuloAdmin} className="chuloAdmin"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
}
