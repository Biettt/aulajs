//criando a variavel e setando a chave o valor
let key='item1';
//localStorage.setItem(key, 'valor'); 
sessionStorage.setItem(key, 'Gabriela');


//lendo o valor que já está
let lerItem = localStorage.getItem(key);
console.log(lerItem);


//removendo valor
localStorage.removeItem(key);
//remove tudo
localStorage.clear();


//criando objeto
let dados = {name:'Usuario', idade:20};
localStorage.setItem(dados);
console.log(dados);
