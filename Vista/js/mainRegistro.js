const formulario = document.getElementById('formulario'); //aceedemos al formulario
const inputs = document.querySelectorAll('#formulario input');//obtenemos un arreglo de inputs

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{9}$/ // 7 a 14 numeros.
};

const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false
};

const validarFormulario = (e)=>{
    switch(e.target.name){//selecciona el input en el que este ubicado
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
            break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            break;
        case "password2":
            validarPassword2();
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
            break;
    }
};

const validarCampo = (expresion, input, campo) =>{ //campo es el id del div
    if(expresion.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo_${campo} .formulario_input-error`).classList
                .remove('formulario_input-error-activo');
        
        campos[campo]=true;
    }else{
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo_${campo} .formulario_input-error`).classList
                .add('formulario_input-error-activo');
        
        campos[campo]=false;
    }
};

const validarPassword2 = () =>{
   const inputPassword1 = document.getElementById('password'); 
   const inputPassword2 = document.getElementById('password2');
   if(inputPassword1.value !== inputPassword2.value){
       document.getElementById(`grupo_password2`).classList.add(
               'formulario_grupo-incorrecto');
       document.getElementById(`grupo_password2`).classList.remove(
               'formulario_grupo-correcto');
       document.querySelector(`#grupo_password2 i`).classList.add(
               'fa-times-circle');
       document.querySelector(`#grupo_password2 i`).classList.remove(
               'fa-check-circle');
       document.querySelector(`#grupo_password2 .formulario_input-error`).
               classList.add(`formulario_input-error-activo`);
       campos['password']=false;
   }else{
       document.getElementById(`grupo_password2`).classList.remove(
               'formulario_grupo-incorrecto');
       document.getElementById(`grupo_password2`).classList.add(
               'formulario_grupo-correcto');
       document.querySelector(`#grupo_password2 i`).classList.remove(
               'fa-times-circle');
       document.querySelector(`#grupo_password2 i`).classList.add(
               'fa-check-circle');
       document.querySelector(`#grupo_password2 .formulario_input-error`).
               classList.remove(`formulario_input-error-activo`);
       campos['password']=true;
   }
};


inputs.forEach((input)=>{ //en cada input se hará lo siguiente
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
});


formulario.addEventListener('submit',(e)=>{
   e.preventDefault();
   
   const terminos = document.getElementById('terminos');
   
   if(campos.usuario && campos.nombre && campos.password && campos.correo
           && campos.telefono && terminos.checked){
       formulario.reset(); //limpiamos campos
       
       document.getElementById('formulario_mensaje-exito').classList.add(
               'formulario_mensaje-exito-activo');
       
       setTimeout(()=>{
           document.getElementById('formulario_mensaje-exito').classList.remove(
                   'formulario_mensaje-exito-activo');
       },5000);
       
   }else{
       document.getElementById('formulario_mensaje').classList.add(
               'formulario_mensaje-activo');
   }
});




