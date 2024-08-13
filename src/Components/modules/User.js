import { Fragment, React, useState, useEffect } from "react";
import "../styles/User.css";
import { Modal, Box, Typography } from '@mui/material';

export function User() {
    const [open, setOpen] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleYes = () => {
        setSuccessMessage('Usuario creado y acceso dado');
        setOpen(false);
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 3000); // Desaparecer el mensaje después de 3 segundos
    };

    const handleNo = () => {
        setSuccessMessage('Usuario creado');
        setOpen(false);
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 3000); // Desaparecer el mensaje después de 3 segundos
    };

    useEffect(() => {
        if (showMessage) {
            setTimeout(() => {
                setShowMessage(false);
            }, 3000); // Desaparecer el mensaje después de 3 segundos
        }
    }, [showMessage]);

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
                        <option value={"Administrativo"}>Administrativo</option>
                        <option value={"Visitante"}>Visitante</option>
                        <option value={"Directivo"}>Directivo</option>
                        <option value={"Estudiante"}>Estudiante</option>
                        <option value={"Docente"}>Docente</option>
                    </select>
                </div>
                <div className="boxButton"> 
                    <button className="buttonCreateUser" onClick={handleOpen}>Crear usuario</button>
                </div>
            </div>
            
            <Modal open={open} onClose={handleClose}>
                <Box className="modalBox">
                    <Typography variant="h6" component="h2" mb={2}>
                        ¿Desea dar acceso al usuario?
                    </Typography>
                    <Box className="modalButtons">
                        <button className="buttonYes" onClick={handleYes}>Si</button>
                        <button className="buttonNop" onClick={handleNo}>No</button>
                    </Box>
                </Box>
            </Modal>

            {showMessage && (
                <div className="successMessage">
                    {successMessage}
                </div>
            )}
        </Fragment>
    );
}