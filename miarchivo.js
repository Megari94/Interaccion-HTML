alert("Bienvenido a Clinica Santa Ana");
class Horarios {
  constructor(dia, horario, nombre, especialidad, prepaga, img) {
    this.dia = dia;
    this.horario = horario;
    this.nombre = nombre;
    this.especialidad = especialidad;
    this.prepaga = prepaga;
    this.img = img;
  }
}
class Paciente {
  constructor(Nombre, Apellido, Dia, Orden) {
    this.Nombre = Nombre;
    this.Apellido = Apellido;
    this.Dia = Dia;
    this.Orden = Orden;
  }

  datos() {
    //SE EJECUTARA EN EL CASO DE QUE SE INGRESE UN NUMERO MENOR O IGUAL A 10
    if (this.Orden < 11) {
      console.log(
        `Bienvenid@ ${this.Nombre}. Tu número de orden es: ${this.Orden} el dia ${this.Dia}.`
      );
    } else {
      console.log("ERROR");
    }
  }
  disponible() {
    switch (
      this.Orden //DESPLEGARA UN MENSAJE CON EL HORARIO DE CADA TURNO SEGUN ELIJA EL USUARIO
    ) {
      case "1":
        console.log("Primer turno, 8hs");
        break;
      case "2":
        console.log("Segundo turno, 9hs");
        break;
      case "3":
        console.log("Tercer turno, 10hs");
        break;
      case "4":
        console.log("Cuarto turno, 11hs");
        break;
      case "5":
        console.log("Quinto turno, 12hs");
        break;
      case "6":
        console.log("Sexto turno, 16hs");
        break;
      case "7":
        console.log("Septimo turno, 17hs");
        break;
      case "8":
        console.log("Octavo turno, 18hs");
        break;
      case "9":
        console.log("Noveno turno, 19hs");
        break;
      case "10":
        console.log("Ultimo turno, 20hs");
        break;
      default:
        console.log("Solo hay 10 turnos al día");
    }
  }

  cancel() {
    console.log(`Para cancelaciones, contactarse con secretaria. Gracias!`);
  }
}

//TABLA DE DOCTORES

let lunes = new Horarios(
  "Lunes",
  "08hs a 12hs",
  "Dr. Lautaro Gimenez",
  "Clinico",
  "Prepaga: SI",
  "https://img.freepik.com/foto-gratis/doctor-brazos-cruzados-sobre-fondo-blanco_1368-5790.jpg?w=2000"
);
let lunes2 = new Horarios(
  "Lunes",
  "16hs a 20hs",
  "Dr. Lautaro Gimenez",
  "Clinico",
  "Prepaga: SI",
  "https://img.freepik.com/foto-gratis/doctor-brazos-cruzados-sobre-fondo-blanco_1368-5790.jpg?w=2000"
);
let martes = new Horarios(
  "Martes",
  "08hs a 12hs",
  "Lic. Agustín Palacios",
  "Nutricionista",
  "Prepaga: NO",
  "https://bosworthinstitute.com/wp-content/uploads/2020/07/Nutricionista-bosworth-carrera.png"
);
let martes2 = new Horarios(
  "Martes",
  "16hs a 20hs",
  "Lic. Maria Cordoba",
  "Nutricionista",
  "Prepaga: NO",
  "https://nutricionistahuelva.es/ficheros/servicios/psiconutricion_C_4.jpg"
);
let mier = new Horarios(
  "Miercoles",
  "08hs a 12hs",
  "Dra. Rocio Matozo",
  "Pediatra",
  "Prepaga: SI",
  "https://ximenamargain.com/wp-content/uploads/2021/07/DOCTORA-XIMENA-LINKS-PEDIATRA.jpg"
);
let mier2 = new Horarios(
  "Miercoles",
  "16hs a 20hs",
  "Dr. Lautaro Gimenez",
  "Clinico",
  "Prepaga: SI",
  "https://img.freepik.com/foto-gratis/doctor-brazos-cruzados-sobre-fondo-blanco_1368-5790.jpg?w=2000"
);
let juev = new Horarios(
  "Jueves",
  "08hs a 16hs",
  "Dra. Rocio Matozo",
  "Pediatra",
  "Prepaga: SI",
  "https://ximenamargain.com/wp-content/uploads/2021/07/DOCTORA-XIMENA-LINKS-PEDIATRA.jpg"
);
let juev2 = new Horarios(
  "Jueves",
  "16hs a 20hs",
  "Dr. Lautaro Gimenez",
  "Clinico",
  "Prepaga: SI",
  "https://img.freepik.com/foto-gratis/doctor-brazos-cruzados-sobre-fondo-blanco_1368-5790.jpg?w=2000"
);
let vier = new Horarios(
  "Viernes",
  "08hs a 12hs",
  "Dr. Gregorio Muñoz",
  "Cardiologia",
  "Prepaga: NO",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC8a-31MUy64qk80BIpp8cpv8q273vQFMIkXBdWmnNU96bXD1fKfG5vYW82Nf-kRMq1VM&usqp=CAU"
);
let vier2 = new Horarios(
  "Viernes",
  "16hs a 20hs",
  "Dr. Lautaro Gimenez",
  "Clinico",
  "Prepaga: SI",
  "https://img.freepik.com/foto-gratis/doctor-brazos-cruzados-sobre-fondo-blanco_1368-5790.jpg?w=2000"
);

const dr = [
  lunes,
  lunes2,
  martes,
  martes2,
  mier,
  mier2,
  juev,
  juev2,
  vier,
  vier2,
];

//Es mejor hacer en vez de pushear a cada uno!

console.table(dr);
//DOM (tarjetas de doctores), proximamente clickables para pedir turno

const cards = document.querySelector("#card-doctores"); // a traves de ForEach iteramos:

dr.forEach((tarjetaDr) => {
  cards.innerHTML += `
    <div class="card" style="width: 13rem;" align="center">
        <h3 class="title" align="center">${tarjetaDr.nombre}</h3>
        <img class="card-img-top" style= "height: 7rem;" src=${tarjetaDr.img}>
        <div class="card-body">            
          <p class="card-text">${tarjetaDr.dia}</p>
          <p class="card-text">${tarjetaDr.horario}</p>
          <p class="card-text">${tarjetaDr.especialidad}</p>
          <p class="card-text">${tarjetaDr.prepaga}</p>
         <button class="boton">Reservar</button>
        </div>
    `;
});

//DOCTOR DISPONIBLE EN CLINICA

let drDispo = dr.find((Horarios) => Horarios.especialidad == "Clinico");

console.log(
  `Por vacaciones estaremos contando con un solo Medico Clinico: ${drDispo.nombre}`
);

//PERSONAL QUE TRABAJE CON OBRA SOCIAL

let prep = dr.filter((Horarios) => Horarios.prepaga == "SI");
//

console.log(`Personal que trabaja con Obra Social`);
console.table(prep);

//TABLA DEL PACIENTE

const pacientes = new Paciente(
  prompt("Ingrese su Nombre"),
  prompt("Ingrese su Apellido"),
  prompt("Dia de consulta?:"),
  prompt("En que orden le gustaría ser atendido: ")
);

pacientes.datos();
pacientes.disponible();
pacientes.cancel();

const turnos = [];

turnos.push(pacientes);
console.table(turnos);

//FUNCION PARA LOS DATOS DE LA CLINICA

function consultas() {
  console.log("Contactanos por nuestros medios directos");
  console.log("Telefonos: 362484881 / 3624489785");
  console.log("clinica@santa-ana.com");
}

let consulta = prompt("Desea realizar otra consulta?").toLocaleUpperCase();

while (consulta == "SI") {
  consultas();
  consulta = prompt("Desea realizar otra consulta?").toLocaleUpperCase();
}
