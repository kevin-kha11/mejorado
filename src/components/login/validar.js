import swal from 'sweetalert';

export const validarUser = (mail,pass, user, navigate)=> {
	if(mail != user.correo || pass != user.contra) {
		swal("Datos incorrectos", "verifique sus datos", "error");

		return
	}
	swal("Sesion iniciada", "continuar", "success");

	navigate('/home')
}

export const validarCampos = (campo)=> 	campo.length<1 ? true : false