import { useState } from 'react'
import { validarCampos, validarUser } from './validar';
import { useNavigate } from 'react-router-dom';
import './login.css'
import logo from '../../assets/a.png';
import { BiUser,BiLockAlt } from "react-icons/bi";

const Login = () => {
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");
  const navigate = useNavigate();

  const user = {correo : "kevin@gmail.com", contra : "1234"}

  function setStateEmail({target}) {
    setEmail(target.value)
  }
  function setStatePass({target}) {
    setPassword(target.value)
  }
  function inciarSesion(event) {
    event.preventDefault()
    const emailVacio = validarCampos(email)
    const passVacia = validarCampos(password)

    if (emailVacio || passVacia){
      alert("Debe llenar todos los campos")
      return
    }
  
     validarUser(email, password, user, navigate)
  }

  return (
    <div className="modal-dialog text-center">
      <div className='col-sm-10 principal'>
        <div className='modal-content padre'>
          <div className='col-12'>
            <img src={logo} className='user'/>
            <form class="col-12" onSubmit={inciarSesion}>
            <div class="col-auto">
              <label htmlFor=""><BiUser></BiUser></label>
              <input type="email"  class="form-control mail" id="staticEmail2" placeholder="Email" onChange={setStateEmail} value={email}/>
            </div>
            <div class="col-auto">
            <label htmlFor=""><BiLockAlt></BiLockAlt></label>

              <input type="password" class="form-control pass" id="inputPassword2" placeholder="Password" onChange={setStatePass} value={password}/>
            </div>
            <br />
            <div class="col-auto">
              <button type="submit" class="btn btn-info mb-3" >Iniciar Sesion</button>
            </div>
            <a href="#">Recordar contraseña</a>
            <br /><br />
          </form>
          </div>
        </div>

      </div>

    </div>

  )
}

export default Login