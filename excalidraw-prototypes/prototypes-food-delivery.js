function Usuario(nombre, apellido, clave, direccion, telefono) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.clave = clave;
  this.direccion = direccion;
  this.telefono = telefono;
}

Usuario.prototype.realizarPedido = function () {
  let pedido = prompt(`que va a pedir?`);
  console.log(`pedido solicitado, la solicitud del usuario es ${pedido}`);
};

Usuario.prototype.verHistorialpedido = function () {
  let historialPedidos = [];
  let pedido = prompt(`que va a pedir?`);
  historialPedidos.push(pedido);
  console.log(`el historial de pedidos del usuario es ${historialPedidos}`);
};

Usuario.prototype.autenticacion = function () {
  let usuario = prompt(`ingrese su usuario`);
  let contrasena = prompt(`cual es su contrasena`);
  if (usuario && contrasena) {
    console.log(`usuario autenticado`);
  }
};

//restauranteFisico

function RestauranteFisico(nombre, direccion, menuFisico) {
  this.nombre = nombre;
  this.direccion = direccion;
  this.menuFisico = menuFisico;
}

RestauranteFisico.prototype.agregarPlato = function () {
  let plato = [pedido];
  console.log(`nuevo plato ${plato}`);
};

RestauranteFisico.prototype.actualizarPlato = function () {
  let newPedido = prompt(`cual va a ser el nuevo plato que elegira?`);
  let plato = newPedido;
  console.log(`nuevo plato ${plato}`);
};

RestauranteFisico.prototype.eliminarPlato = function () {
  let newPedido = prompt(`cual va a ser el plato que borrara?`);
  if (plato === newPedido) {
    console.log(`plato eliminado ${plato}`);
    plato = null;
  }
};

//RestauranteDigital

function RestauranteDigital(nombre, menuQR) {
  this.nombre = nombre;
  this.menuQR = menuQR;
}

RestauranteDigital.prototype.agregarPlato = function () {
  let plato = [pedido];
  console.log(`nuevo plato ${plato}`);
};

RestauranteDigital.prototype.actualizarPlato = function () {
  let newPedido = prompt(`cual va a ser el nuevo plato que elegira?`);
  let plato = newPedido;
  console.log(`nuevo plato ${plato}`);
};

//menuQR

function menuQR(plato, url) {
  this.plato = plato;
  this.url = url;
}

menubar.prototype.generarQR = () => {
  console.log(`este es el QR `);
};

//menuFIsico

function menuFisico(plato) {
  this.plato = plato;
}

menuFisico.prototype.impresion = () => {
  console.log(`aqui se imprimira el menu`);
};

menuFisico.prototype.visualizacion = () => {
  console.log(`aqui se visualizara el menu`);
};

//plato

function Plato(nombre, precio, ingredientes) {
  this.nombre = nombre;
  this.precio = precio;
  this.ingredientes = ingredientes;
}

Plato.prototype.obtenerInfo = () => {
  console.log(`aqui estan los ingredientes del plato ${this.ingredientes}`);
};

//pedido

function Pedido(cliente, restaurante, detallesPedido, estadoPedido) {
  this.cliente = cliente;
  this.restaurante = restaurante;
  this.detallesPedido = detallesPedido;
  this.estadoPedido = estadoPedido;
}

Pedido.prototype.actualizarEstado = () => {
  newStatus = prompt(`cual es el nuevo status del pedido`);
  this.estadoPedido = newStatus;
  console.log(estadoPedido);
};

Pedido.prototype.calcularTotal = () => {
  let total = platos;
  console.log(total);
};

//repartidor

function Repartidor(nombre, email, clave, vehiculo, disponibilidad) {
  this.nombre = nombre;
  this.email = email;
  this.clave = clave;
  this.vehiculo = vehiculo;
  this.disponibilidad = disponibilidad;
}

Repartidor.prototype.aceptarEnvio = () => {
  confirmacionRepartidor = confirm(`deseas continuar con el pedido?`);
  if (confirmacionRepartidor) {
    console.log(`pedido confirmado`);
  }
};

Repartidor.prototype.actualizarUbicacion = () => {
  barrioActual = prompt(`en que barrio te encuentras ubicado actualmente?`);
  console.log(
    `el repartidor esta cerca de la ubicacion del cliente, va por ${barrioActual}`
  );
};

Repartidor.prototype.completarEntrega = () => {
  barrioActual = prompt(`en que barrio te encuentras ubicado actualmente?`);
  console.log(
    `el repartidor esta cerca de la ubicacion del cliente, va por ${barrioActual}`
  );
};

Repartidor.prototype.autenticacion = () => {
  let usuario = prompt(`ingrese su usuario`);
  let contrasena = prompt(`cual es su contrasena`);
  if (usuario && contrasena) {
    console.log(`usuario autenticado`);
  }
};

Repartidor.prototype.actualizarEstado = () => {
  estadoActual = prompt(`en que estado estas actualmente?`);
  console.log(`el pedido va en la siguiente etapa, va por ${estadoActual}`);
};
