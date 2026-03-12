
const displayTotal = document.getElementById('total');
let totalSoma = 0;
const botoes = document.querySelectorAll('.comprar');
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const precoProduto = parseFloat(botao.getAttribute('data-preco'));
        totalSoma += precoProduto;
        displayTotal.textContent = `[carrinho: R$ ${totalSoma.toFixed(2).replace('.', ',')}]`;

    });
});


const displayItem = document.getElementById('produto');
const botoe = document.querySelectorAll('comprar');
let contagemProdutos = 0;
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        contagemProdutos++;
        displayItem.innerText = `[carrinho (item):${contagemProdutos}]`;
    });
});


const botaoFinalizar = document.getElementById('finalizar');
const displayTotau = document.getElementById('total');
const displayProduto = document.getElementById('produto');


botaoFinalizar.addEventListener('click', () => {
    
    totalSoma = 0;
    contagemProdutos = 0;

    
    displayTotal.innerText = `[carrinho (total): ${totalSoma.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}]`;
    displayProduto.innerText = `[carrinho (item): ${contagemProdutos}]`;

    alert("Compra finalizada com sucesso! Seu carrinho foi esvaziado.");
});

