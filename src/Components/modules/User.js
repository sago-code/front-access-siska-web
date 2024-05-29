import { Fragment, React } from "react";
import "../styles/User.css";

export function User() {


    return (
        <Fragment>
            <div className="tableUser">
                <div>
                    <label form="Nombre">Nombre*</label>
                    <input name="Nombre" form="Nombre" placeholder="Nombre..."></input>
                </div>
                <div>
                    <label form="Correo">Correo*</label>
                    <input name="Correo" form="Correo" placeholder="Correo..."></input>
                </div>
                <div>
                    <label form="Seccional">Seccional*</label>
                    <input name="Seccional" form="Seccional" placeholder="Seccional..."></input>
                </div>
                <div>
                    <label form="Identificacion">Identificacion*</label>
                    <input name="Identificacion" form="Identificacion" placeholder="Identificacion..." type="number"></input>
                </div>
                <div>
                    <label>Tipo de usuario*</label>
                    <select>
                        <option selected disabled value="">Seleccione...</option>
                        <option value={"Super amin"}>Super amin</option>
                        <option value={"Administrativos"}>Administrativos</option>
                        <option value={"Visitantes"}>Visitantes</option>
                        <option value={"Directivos"}>Directivos</option>
                    </select>
                </div>
            </div>
        </Fragment>
    );
}