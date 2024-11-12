export interface Cliente {
    clid: number;
    clinombre: string;
    clicorreo: string;
    clitelefono: string;
    clici: string;
    pedidos: Pedido[];
  }
  
  export interface Pedido {
    peid: number;
    pedfecha: Date;
    pedtotal: number;
    clid: number;
    cliente: Cliente;
    productos: PedidoProducto[];
  }
  
  export interface Tipo {
    tipid: number;
    tipnombre: string;
    productos: Producto[];
  }
  
  export interface Productor {
    proid: number;
    pronombre: string;
    prodescripcion: string;
    profoto: string;
    productos: Producto[];
  }
  
  export interface Producto {
    prdid: number;
    prdnombre: string;
    prddescripcion: string;
    prdprecio: number;
    prdfoto: string;
    prdcntnut: string;
    tipid: number;
    tipo: Tipo;
    proid: number;
    productor: Productor;
    pedidos: PedidoProducto[];
  }
  
  export interface PedidoProducto {
    ppcantidad: number;
    peid: number;
    pedido: Pedido;
    prdid: number;
    producto: Producto;
  }
  