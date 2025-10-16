const produtos = [
  {
    nome: "Camisa Polo Red Bull ",
    preco: "R$ 62,91",
    imagem: "img-produtos/camisa redbull2.png",
    link: "https://s.shopee.com.br/5VMhyeNdAh"
  },
  {
    nome: "Camiseta PAVTROS Casual",
    preco: "R$ 299,90",
    imagem: "img-produtos/camisa pavtros.png",
    link: "https://www.amazon.com.br/"
  },
  {
    nome: "Camiseta Masculina La Belle Vie",
    preco: "R$ 499,00",
    imagem: "img-produtos/camisa la belle vie.png",
    link: "https://www.amazon.com.br/"
  },
  {
    nome: "Camisa Boston",
    preco: "R$ 239,00",
    imagem: "img-produtos/camisa boston2.png",
    link: "https://www.amazon.com.br/"
  },
  {
    nome: "calça 2",
    preco: "R$ 589,00",
    imagem: "img-produtos/projetor.png",
    link: "https://www.amazon.com.br/"
  },
         {
    nome: "calça 2",
    preco: "R$ 589,00",
    imagem: "img-produtos/projetor.png",
    link: "https://www.amazon.com.br/"
  },
   {
    nome: "calça 2",
    preco: "R$ 589,00",
    imagem: "img-produtos/projetor.png",
    link: "https://www.amazon.com.br/"
  },
         {
    nome: "calça 2",
    preco: "R$ 589,00",
    imagem: "img-produtos/projetor.png",
    link: "https://www.amazon.com.br/"
  },
         {
    nome: "calça 2",
    preco: "R$ 589,00",
    imagem: "img-produtos/projetor.png",
    link: "https://www.amazon.com.br/"
  }
];

// product

const productList = document.getElementById('productList');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');

function exibirProdutos(lista) {
  productList.innerHTML = '';
  if (lista.length === 0) {
    // noResults.style.display = 'block';
    return;
  }
  noResults.style.display = 'none';
  lista.forEach(prod => {
    const a = document.createElement('a');
    a.classList.add('product');
    a.href = prod.link;
    a.target = "_blank";
    a.innerHTML = `
          <img src="${prod.imagem}" alt="${prod.nome}">
          <h3>${prod.nome}</h3>
        `;
    productList.appendChild(a);
  });
}

// 👉 Começa com lista vazia
productList.innerHTML = '';

// Quando digitar, filtra e exibe
searchInput.addEventListener('input', () => {
  const termo = searchInput.value.toLowerCase().trim();
  if (termo === '') {
    productList.innerHTML = '';
    noResults.style.display = 'none';
    return;
  }
  let count = 0;
  const filtrados = produtos.filter(p => {
  if (p.nome.toLowerCase().startsWith(termo) && count < 4) {
    count++;
    return true;
  }
  return false;
});
exibirProdutos(filtrados);
  // .filter(p => p.nome.toLowerCase().startsWith(termo));
  // exibirProdutos(filtrados);
});

// menu

const suggestions = document.getElementById("suggestions");

searchInput.addEventListener("input", () => {
  const valor = searchInput.value.toLowerCase().trim();
  suggestions.innerHTML = "";

  if (valor.length === 0) {
    suggestions.style.display = "none";
    return;
  }

  const filtrados = produtos
  .filter(prod => prod.nome.toLowerCase().startsWith(valor))
  .slice(0, 5);
  
  

  if (filtrados.length === 0) {
    suggestions.style.display = "none";
    return;
  }

  filtrados.forEach(prod => {
    const div = document.createElement("div");
    div.textContent = prod.nome;
    div.addEventListener("click", () => {
      window.location.href = prod.link;
    });
    suggestions.appendChild(div);
  });

  suggestions.style.display = "block";
});


// teste 

