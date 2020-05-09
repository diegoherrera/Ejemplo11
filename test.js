//vamos a generar una clase Persona con algunos atributos
var Persona = /** @class */ (function () {
    function Persona() {
        this.provincia = "Tucuman";
        this.esProfesional = false;
    }
    return Persona;
}());
//luego generamos instancia 1 de la clase persona para definir el objeto 1
var instanciaPersona = new Persona();
instanciaPersona.nombre = "Diego";
instanciaPersona.apellido = "Herrera";
instanciaPersona.edad = 41;
//luego generamos instancia 2 de la clase persona para definir el objeto 2
var instanciaPersona2 = new Persona();
instanciaPersona2.nombre = "Jose";
instanciaPersona2.apellido = "Perez";
instanciaPersona2.edad = 41;
// finalmente imprimimos el contenido de los objetos. 
console.log(JSON.stringify(instanciaPersona));
console.log(JSON.stringify(instanciaPersona2));
