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


//criando objeto (recebe nome e 2 parametros, tecnicamente array)
let keys='chave'
let dados = {name:'Usuario', idade:20};
localStorage.setItem(keys,JSON.stringify(dados)); //dessa forma ele vai converter a string e entender
console.log(dados);


//criando lista de objetos
let listaDados=[];
//objeto base
function Campos(campo1){
    this.campo1=campo1;
}
//botão vai disparar
const btnEnviar = document.querySelector('#btnSubmit');
//envio do click

btnEnviar.addEventListener('click',()=>{
    const inputCampo = document.querySelector("#campo1");
//instacia, dizer que algo é algo com outro nome / instacia recebendo o objeto
let info = new Campos(inputCampo.value);
//lista de usuarios que receber do objeto
listaDados.push(info);
localStorage.setItem("dados",JSON.stringify(listaDados));
});


