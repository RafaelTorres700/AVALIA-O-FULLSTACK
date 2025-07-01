let produtos = [];
let indexAtual = 0;

fetch('produtos.json')
  .then(response => response.json())
  .then(data => {
    produtos = data;
    carregarCarrossel();
  });

function carregarCarrossel() {
  const carrossel = document.getElementById('carrossel');
  carrossel.innerHTML = '';

  produtos.forEach(item => {
    const div = document.createElement('div');
    div.className = 'carrossel-item';
    div.innerHTML = `
      <img src="${item.imagem}" alt="${item.titulo}">
      <h3>${item.titulo}</h3>
      <p>${item.descricao}</p>
    `;
    carrossel.appendChild(div);
  });

  atualizarCarrossel();
}

function atualizarCarrossel() {
  const carrossel = document.getElementById('carrossel');
  carrossel.style.transform = `translateX(-${indexAtual * 100}%)`;
}

function avancar() {
  if(produtos.length === 0) return;
  indexAtual = (indexAtual + 1) % produtos.length;
  atualizarCarrossel();
}

function voltar() {
  if(produtos.length === 0) return;
  indexAtual = (indexAtual - 1 + produtos.length) % produtos.length;
  atualizarCarrossel();
}




