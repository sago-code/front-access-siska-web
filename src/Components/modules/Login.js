import { Fragment, useState } from 'react';
import '../styles/login.css';
import logo from '../images/Logo_access_siska.png';
import logoUni from '../images/Logo_uni_libre.png';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRedirection = (event) => {
        event.preventDefault();
        if (email === 'temporal@prueba.com' && password === 'Admin123') {
            window.location.href = '/mainPage';
        } else {
            setErrorMessage('Correo electrónico o contraseña incorrectos.');
        }
    };

    return(
        <Fragment>
            <div className='container'>
                <div className='image-container'>
                    <img src={logo} alt='LogoLogin'/>
                    <h4 className='systemAdminText'>Sistema Administrativo de acceso</h4>
                </div>
                <div className='login-square'>
                    <div className='login-form'>
                        <h1 className='login-title'>Inicio de sesión</h1>
                        <form onSubmit={handleRedirection}>
                            <div>
                                <input
                                    type="text"
                                    name="name_user"
                                    placeholder="correo electronico"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name="user_password"
                                    placeholder="contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" onClick={handleRedirection}>iniciar sesión</button>
                            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                            <div>
                                <label>¿Olvido su contraseña?</label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='img-container'>
                    <img src={logoUni} alt='LogoUni' className='logoUniL'/>
                </div>
            </div>
        </Fragment>
    );
}