function Usuario(nombre, email, puntosAcumulados, clave) {
    this.nombre = nombre;
    this.email = email;
    this.puntosAcumulados = puntosAcumulados;
    this.clave = clave;
}

Usuario.prototype.acumulaPuntos = () => {
    puntosAcumulados++
    console.log(`${puntosAcumulados}`)
}

Usuario.prototype.canjearPuntos = () => {
    let productosAdquiridosConPuntos = [productoComprado];
    puntosAcumulados--;
    console.log(`${productosAdquiridosConPuntos}`);
};

function Actividad(tipo, puntosOtorgados) {
    this.tipo = tipo;
    this.puntosOtorgados = puntosOtorgados;
}

Actividad.prototype.completarActividad = () => {
    console.log(`tarea completada!`)
}

function OrdenDeCanje() {
    Actividad.call(this, tipo, puntosOtorgados);
    Actividad.prototype.call(completarActividad);
}

// OrdenDeCanje.prototype.completarActividad = () => {
//     console.log(`tarea completada!`)
// }

function Administrador() {
    Actividad.call(this, nombre, email, clave);

}

function CategoriaDeProducto (name, descripcion){ //nada mas sera creado y heredado por mera ciencia
    Usuario.call(this, name)
    this.descripcion = descripcion
}

CategoriaDeProducto.prototype = Object.create(Usuario.prototype); //el object.create usa como parametro el prototipo que va a usar para heredar las propiedades
CategoriaDeProducto.prototype.constructor = CategoriaDeProducto; //ej: UserChild heredara las propiedades de Usuario

function ProductoFisico(nombre, email, puntosAcumulados, clave) {
    Actividad.call(this, nombre, email, clave);
    this.puntosAcumulados = puntosAcumulados;
}

ProductoFisico.prototype.acumularPuntos = () => {
    Puntos++;
    console.log(`puntos extra acumulados`)
}

ProductoFisico.prototype.canjearPuntos = () => {
    console.log(`puntos canjeados`)
}

function ProductoDigital(nombre, puntosNecesarios, URL, cantidadDisponible, stock) {
    this.nombre = nombre;
    this.puntosNecesarios = puntosNecesarios;
    this.URL = URL;
    this.cantidadDisponible = cantidadDisponible;
    this.stock = stock
}

ProductoDigital.prototype.obtenerInfo = () => {
    console.log(`obteniendo informacion...`);
}

ProductoDigital.prototype.descargar = () => {
    console.log(`descargando producto...`);

}

ProductoDigital.prototype.obtenerProductoEmail = () => {
    console.log(`obteniendo producto a traves de email...`);

}