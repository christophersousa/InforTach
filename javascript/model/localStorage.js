function nextId() {
    const produtos = readAll();
  
    const ids = produtos.map((produto) => produto.id);
  
    const maxId = Math.max(...ids);
  
    return maxId + 1;
  }
  
  function load(newProdutos) {
    localStorage.setItem('Produtos-app:Produtos', JSON.stringify(newProdutos));
  }
  
  function create(produto) {
    produto = { id: nextId(), ...produto };
  
    const produtos = readAll();
  
    const newProdutos = [...produtos, produto];
  
    load(newProdutos);
  
    return produto;
  }
  
  function readAll() {
    return JSON.parse(localStorage.getItem('Produtos-app:Produtos'));
  }
  
  function read(id) {
    const produtos = readAll();
  
    const produto = produtos.find((produto) => produto.id === id);
  
    return produto;
  }
  
  function update(id, produto) {
    const produtos = readAll();
  
    const index = produtos.findIndex((produto) => produto.id === id);
  
    if (index >= 0) {
      produtos[index] = { id, ...produto };
    }
  
    load(produtos);
  
    return produto;
  }
  
  function destroy(id) {
    const produtos = readAll();
  
    const index = produtos.findIndex((produto) => produto.id === id);
  
    if (index >= 0) {
        produtos.splice(index, 1);
    }
  
    load(produtos);
  }
  
  export default { load, create, readAll, read, update, destroy };