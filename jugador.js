let Jugador = function(nombre, fichas) {
    this.nombre = nombre;
    this.fichas = fichas;
};

let setJugador = () => {
    let jugador1 = new Jugador('Ricardo', ['1/2', '3/4']);
    console.log(jugador1);
}
module.exports = setJugador();
