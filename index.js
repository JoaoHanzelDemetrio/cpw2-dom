/**
 * Aplica a cor #BECCC3 no background do body da página
 */
function background() {

    /**
     * Tarefa/Issue  1
     *
     * Desenvolva uma função capaz de trocar a cor do fundo da página, ou seja,
     * alterar o background do body para a cor #BECCC3.
     */
    ;
  
    document.body.style.backgroundColor = "#BECCC3"
  
  }
  
  /**
   * Recupera os valores dos campos de texto cujo o id='fname' e id='lname'
   * e apresente o nome e o sobrenome de uma pessoa (separado por um espaço)
   * na div id='result'
   */
  function show() {
  
    /**
     * Issue  2
     *
     * Recupera os valores dos campos de texto cujo o id='fname' e id='lname' e apresente o nome
     * e o sobrenome de uma pessoa (separado por um espaço) na div id='result'
     */
  
    const nome = document.getElementById("fname").value;
    const sobrenome = document.getElementById("lname").value;
    const nomeSobrenome = `${nome} ${sobrenome}`;
    document.getElementById("result").innerHTML = nomeSobrenome;
  
  
  }
  
  /**
   * Filtra o array de objetos (data) de acordo com os caracteres
   * digitados no campo de texto id='name'
   */
  function search() {
  
    var data = [{ name: "Rodrigo" }, { name: "Ricardo" }, { name: "Fabio" }, { name: "Alex" }, { name: "Sílvia" }];
  
    const input = document.getElementById("name").value.toUpperCase();
    const pesquisa = [];
  
    for (let i = 0; i < data.length; i++) {
      const name = data[i].name.toUpperCase();
      if (name.indexOf(input) === 0) {
        pesquisa.push(data[i].name);
      }
    }
    removeAllChildren("search");
  
    for (let i = 0; i < pesquisa.length; i++) {
      const div = document.createElement("div");
      const text = document.createTextNode(pesquisa[i]);
      div.appendChild(text);
      document.getElementById("search").appendChild(div);
    }
  
  
  }
  
  /**
   * Remove todos os filhos de um nó
   *
   * @param {*} node Um objeto HTML Node
   */
  function removeAllChildren(elementoId) {
      const elemento = document.getElementById(elementoId);
      while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
      }
  }
  