//Aqui esta la informacion de los Usuarios MALI, GERA, MAUI en el mismo orden que se requeria y sus respectivos saldos.
var cuentas = [
  { id:1,nombre: 'Mali', nip: '1234', saldo: 200 },
  { id:2,nombre: 'Gera', nip: '1234', saldo: 290 },
  { id:3,nombre: 'Maui', nip: '1234', saldo: 67 },
  { id:4,nombre: 'Eduardo', nip: '1234', saldo: 500 },
];

 var jsonUsuarios = JSON.stringify(cuentas)
 localStorage.setItem('cuentas',jsonUsuarios  );

const usuario = document.getElementById('usuario');
const password = document.getElementById('password');


const alertaEspacio = document.getElementById('liveAlertPlaceholder');

var usuarioCuenta = '';
var usuarioSeleccionado = '';



if(usuario)
{
  usuario.addEventListener('change',(e) => {
    usuarioSeleccionado = usuario.selectedIndex;
      let nombre = usuario.options[usuarioSeleccionado].text; 
  
    });
}

if(btnIniciar){
  btnIniciar.addEventListener('click', (e) => {
    validarContra();
  });
}
if(password){
  password.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      validarContra();
    }
  });
}

function validarContra(){
  if(password.value == "")
  {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-danger alert-dismissible" role="alert">`,
      `   <div>Favor de ingresar tu NIP</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
    alertaEspacio.append(wrapper);
  }
  else{
    var allUsers = localStorage.getItem('cuentas');
    var arrUsers =  JSON.parse(allUsers);
    arrUsers.forEach(element => {
      console.log("elemento: "+element.id);
      if(element.id == usuarioSeleccionado){
        if(password.value == element.nip){
          usuarioCuenta = element.nombre;
          console.log(usuarioCuenta);
         localStorage.setItem('nombre',usuarioCuenta);
         localStorage.setItem('saldo',element.saldo);
         localStorage.setItem('id',element.id);
  
          window.location="app.html"; 

        }
        else{
          const wrapper = document.createElement('div')
          wrapper.innerHTML = [
            `<div class="alert alert-danger alert-dismissible" role="alert">`,
            `   <div>Opps! Nip incorrecto</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
          ].join('')
          alertaEspacio.append(wrapper);
        }
      }
    });
  } 
}
//Fin del documento Javascript