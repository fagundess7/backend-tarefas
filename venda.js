//--Dados do Pedido--

let nomeClient = "João Carlos";
let tipoCliente = "premium";

let nomeProduto = "Teclado Mecanico"
let precoProduto = 180.00;
let estoque = 10;
let quantidadePedido = 5;

//Tem estoque suficiente?
let estoqueOK = quantidadePedido <= estoque;

if (!estoqueOK) {
    console.log("Pedido RECUSADO - estoque insuficiente")
}