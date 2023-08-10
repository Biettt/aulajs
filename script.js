//criando a variavel e setando a chave o valor
let key='item1';
//localStorage.setItem(key, 'valor'); 
sessionStorage.setItem(key, 'valor');

let lerItem = localStorage.getItem(key);
console.log(lerItem);
 

