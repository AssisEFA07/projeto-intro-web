//  Autor: Emerson Assis  data: 22/07/2022
// assunto: Projeto de Introdução ao desenvolvimento web
// Objetos escolhidos para desenvolvimento do projeto - Filmes.

const generos = [
  "Guerra",
  "Terror",
  "Fantasia",
  "Drama",
  "Romance",
  "Ficção científica",
  "Animação",
  "Adaptação Literária",
]; //um array para gêneros.

// criação dos objetos

const filme0 = {
  titulo: "O Túmulo dos Vagalumes",
  sinopse:
    "Os irmão Setsuko e Seita vivem no Japão em meio a Segunda Guerra Mundial. Após a morte da mãe em um bombardeio e a convocação do pai para a Guerra, eles vão morar com alguns parentes. Insatisfeitos, saem da cidade e acabam em um abrigo na floresta.",
  duracao: 89,
  lancamento: 1988,
  remake: true,
  genero: `${generos[0]}/ ${generos[3]}`,
  elenco: ["Ayano Shiraishi", " Tsutomu Tatsumi"],
  img: "http://pm1.narvii.com/6244/9f800705b086d1412e3cb82def11a4f487d8b2ea_00.jpg",
  ref: "https://www.youtube.com/watch?v=tC0Ug7sY0wE",
  target: `target="_blank"`,
  class: `class="destaque"`,
};

const filme1 = {
  titulo: "A Viagem de Chihiro",
  sinopse:
    "Chihiro e seus pais estão se mudando para uma cidade diferente. A caminho da nova casa, o pai decide pegar um atalho. Eles se deparam com uma mesa repleta de comida, embora ninguém esteja por perto. Chihiro sente o perigo, mas seus pais começam a comer. Quando anoitece, eles se transformam em porcos. Agora, apenas Chihiro pode salvá-los.",
  duracao: 125,
  lancamento: 2001,
  remake: false,
  genero: `${generos[2]}`,
  elenco: ["Rumi Hiiragi", " Miyu Irino", " Mari Natsuki", " Ryūnosuke Kamiki"],
  img: "https://br.web.img3.acsta.net/pictures/210/527/21052756_20131024195513383.jpg",
  ref: "https://www.youtube.com/watch?v=SgZI655GgHk",
  target: `target="_blank"`,
  class: `class="destaque"`,
};

const filme2 = {
  titulo: "A Voz do Silêncio",
  sinopse:
    "Uma estudante com problemas de audição sofre com o bullying dos colegas e decide mudar de escola. Anos mais tarde, um dos rapazes que a importunavam resolve se redimir.",
  duracao: 129,
  lancamento: 2016,
  remake: false,
  genero: `${generos[3]} / ${generos[4]}`,
  elenco: ["Saori Hayami", " Kensho Ono", " Miyu Irino", " Aoi Yūki"],
  img: "https://pbs.twimg.com/media/D8RIxeCWwAAOvt3.jpg",
  ref: "https://www.youtube.com/watch?v=2pcCjJKoOwg",
  target: `target="_blank"`,
  class: `class="destaque"`,
};

const filme3 = {
  titulo: "Metrópolis",
  sinopse:
    "Metrópolis, ano 2026. Os poderosos ficam na superfície, onde há o Jardim dos Prazeres, destinado aos filhos dos mestres. Os operários, em regime de escravidão, trabalham bem abaixo da superfície, na Cidade dos Trabalhadores.",
  duracao: 148,
  lancamento: 1927,
  remake: true,
  genero: `${generos[3]} / ${generos[5]}`,
  elenco: [
    "Brigitt Helm",
    " Gustav Frohlich",
    " Alfred Abel",
    " Rudolf Klein-Rogge",
  ],
  img: "https://images.adsttc.com/adbr001cdn.archdaily.net/wp-content/uploads/2012/06/1338567143_1262715141_metropolisposter.jpg",
  ref: "https://www.youtube.com/watch?v=gdtZv3XROnc",
  target: `target="_blank"`,
  class: `class="destaque"`,
};

// semana 02: composição de relatório dos objetos
// console.log(`Relatório do filme:

//             Título: ${(filme0.titulo).toUpperCase()}
//             Sinopse: ${filme0.sinopse}
//             Duração: ${filme0.duracao}
//             Ano de lançamento: ${filme0.lancamento}
//             É um remake? : ${filme0.remake}
//             Gênero: ${filme0.genero}
//             Elenco: ${filme0.elenco}
//             `);

// console.log("\n" + `Tipo Variável ${"filme0"} : `+ typeof filme0); console.log("\n" + `Tipo Variável ${"filme0.lancamento"} : ` + typeof filme0.lancamento); console.log ("\n" + `Tipo Variável ${"filme0.remake"} : ` + typeof filme0.remake);

// console.log("-------------------------------------");

// const MEDIA = ((filme0.duracao + filme1.duracao + filme2.duracao + filme3.duracao)/4);
// // somente para treino de manipulação de variáveis numéricas
// console.log(`\n A média das durações dos filmes é de ${MEDIA} minutos\n`);
// const horas = Math.floor(MEDIA/60);
// const minutos = Math.floor(MEDIA%60);
// const segundos = (MEDIA%60 - Math.floor(minutos))*60;

// console.log("-------------------------------------");

// console.log(`A média da duração dos filmes do catálogo é de ${horas} horas, ${minutos} minutos e ${segundos} segundos.`);

// console.log("-------------------------------------");

// const VERIFICACAO_LOGICA = (filme0.remake && filme1.remake && filme2.remake && filme3.remake);
// console.log("\nTodos os filmes do catálogo são remakes? : " + `${VERIFICACAO_LOGICA}`+"\n");
// const VERIFICACAO_LOGICA2 = (filme0.remake || filme1.remake || filme2.remake || filme3.remake);
// console.log("\nAlgum fime do catálogo é remake?: " + `${VERIFICACAO_LOGICA2}`+"\n");

// console.log("-------------------------------------");

// semana 03: incorporação dos objetos ao catálogo

// catalogo.push(filme0,filme1,filme2,filme3);
// console.log(catalogo);

//semana 04 : teste se o filme é remake e incorporação no catálogo. A lógica foi invertida - só são adicionados os filmes que não são remakes

let catalogo = []; //criação da variável catálogo, que vai receber os objetos filmes que não são remake.
let catalogoComRemake = []; //catálogo completo, é o que é relevante para o projeto.
catalogoComRemake.push(filme0, filme1, filme2, filme3);

//inserção dos objetos que não são remake no array catálogo
// for (let i = 0; i < catalogoComRemake.length; i++) {
//  if (!catalogoComRemake[i].remake) {
//         catalogo.push(catalogoComRemake[i]);
//   } else {
//     alert(
//       `O filme ${catalogoComRemake[i].titulo} é um remake e não será adicionado ao catálogo!`
//     );
//   }
// }

//semana 05 - refatorando o código e imprimindo relatórios.

// manipulaçao do array de elenco nos objetos filmes, de modo a produzir uma string com os nomes dos atores

// for (let j = 0; j < catalogoComRemake.length; j++) {
//   let atoresString = "";
//   for (let i = 0; i < catalogoComRemake[j].elenco.length; i++) {
//     if (i < catalogoComRemake[j].elenco.length - 1) {
//       atoresString += catalogoComRemake[j].elenco[i] + ", ";
//     } else {
//       atoresString += catalogoComRemake[j].elenco[i] + ".";
//     }
//   }
//   catalogoComRemake[j].ElencoString = atoresString;
// }

//solução elegante:
for (let j = 0; j < catalogoComRemake.length; j++) {
  let atoresString = "";
  for (let i = 0; i < catalogoComRemake[j].elenco.length; i++) {
    atoresString = catalogoComRemake[j].elenco.toString();
  }
  catalogoComRemake[j].ElencoString = atoresString;
}

//impressão do catálogo

// for (filme of catalogoComRemake) {
//   console.log("\nFILME : ", filme);
// }

// for(filme of catalogoComRemake){
//   for (propriedade in filme){
//       console.log(`${propriedade}: ${filme[propriedade]}`)
//   }
// console.log("----------------------");
// }

//semana 06 - função de relatório

// function retornaRelatorio(objFilme) {
//   let relatorio = `"O filme "${objFilme.titulo}", do gênero "${objFilme.genero}", lançado em ${objFilme.lancamento} e com duração de ${objFilme.duracao} minutos é estrelado por ${objFilme.ElencoString}. Sinopse: ${objFilme.sinopse}" `;
//   return relatorio;
// }

// impressão de relatório a partir da pesquisa do usuário

// let imprimeRelatorio = retornaRelatorio(filme0);
// console.log(imprimeRelatorio);
// const tituloString = prompt("Digite o Título procurado: ");
// function pesquisaFilme(arrayDeObj, tituloString){
//   let objARetornar = {};

//   for(let i=0; i<arrayDeObj.length; i++){

//     if(arrayDeObj[i].titulo === tituloString){
//          objARetornar = {...arrayDeObj[i]};
//       }

//   }
//   if(objARetornar.titulo !== tituloString){
//     alert("Filme não encontrado!");
//   }else{
//     return objARetornar;
//   }
// };

// let x = pesquisaFilme(catalogoComRemake,tituloString);
// console.log(x);

//solução alternativa + elegante
// const pesquisaTitulo = prompt("Digite o Título procurado: ");
// let flagPesquisa = false;
// const pequisarFilme = catalogoComRemake.filter((filme)=>{
//   if(filme.titulo === pesquisaTitulo){
//     flagPesquisa = true;
//     return filme.titulo === pesquisaTitulo;
//   }

// })
// if (!flagPesquisa) {
//       alert("Filme não encontrado!");
//     }

// console.log(pequisarFilme);

//semana 11 - criação da lista de filmes via javascript

let listaFilmes = document.createElement("section"); //ul vazia
listaFilmes.setAttribute("id", "lista-filmes"); // setando atributos para chamar e preencher
const container = document.getElementById("container");
container.insertAdjacentElement("beforeend", listaFilmes);

const filmeCatalogo = document.getElementById("lista-filmes");

for (let i = 0; i < catalogoComRemake.length; i++) {
  filmeCatalogo.innerHTML += `<article>
      <div><a href=${catalogoComRemake[i].ref} ${catalogoComRemake[i].target} ${catalogoComRemake[i].class}><h2>${catalogoComRemake[i].titulo}</h2></a><br>
      <p><h3>Lançamento:${catalogoComRemake[i].lancamento}</h3></p>
      <p><h4>O filme "${catalogoComRemake[i].titulo}", do gênero "${catalogoComRemake[i].genero}", lançado em ${catalogoComRemake[i].lancamento} e com duração de ${catalogoComRemake[i].duracao} minutos é estrelado por ${catalogoComRemake[i].ElencoString}. Sinopse: ${catalogoComRemake[i].sinopse}</h4></p>
      </div>
      <img src='${catalogoComRemake[i].img}'>
      </article>`;
}
//catalogo de apresentação composto dinamicamente  via javascript

// semana 12 - aplicação de mecanismos de pesquisa na página

function funcaoBuscar(arrayDeObj, valorString) {
  let objARetornar = {};
  for (let i = 0; i < arrayDeObj.length; i++) {
    if (arrayDeObj[i].titulo.toLowerCase() === valorString.toLowerCase()) {
      objARetornar = { ...arrayDeObj[i] };
    }
  }  

  return objARetornar;
}

// função buscarFilme é a que vai ser conecatada diretamente ao HTML. Função funcaoBuscar é meio.

function buscarFilme() {
  //buscando o elemento do campo (input) por seu id
  const input = document.getElementById("searchBar");
  //considerando o elemento de input preenchido, a constante textoABuscar recebe o value, isto é, o valor escrito no input.
  const textoABuscar = input.value;
  //chamando a função que recebe um array e um parâmetro, e passando como argumento, o array dos meus itens, e a string com o value do campo.

  if (textoABuscar == ""){
    alert('Por favor, indique um título a ser pesquisado');
    document.getElementById("searchBar").focus();
    exit; 
 }
  const filmeRetornado = funcaoBuscar(catalogoComRemake, textoABuscar);

  
  if (filmeRetornado.titulo) {
    let result = document.createElement("section"); //ul vazia
    result.setAttribute("id", "outSearch");
    container.insertAdjacentElement("afterbegin", result);

    const filmeEncontradoLista = document.getElementById("outSearch");

    filmeEncontradoLista.innerHTML = `<article>
      <div><a href=${filmeRetornado.ref} ${filmeRetornado.target} ${filmeRetornado.class}><h2>${(filmeRetornado.titulo).toUpperCase()}</h2></a><br>
      <p><h3>Lançamento:${filmeRetornado.lancamento}</h3></p>
      <p><h4>O filme "${filmeRetornado.titulo}", do gênero "${filmeRetornado.genero}", lançado em ${filmeRetornado.lancamento} e com duração de ${filmeRetornado.duracao} minutos é estrelado por ${filmeRetornado.ElencoString}. Sinopse: ${filmeRetornado.sinopse}</h4></p>
      </div>
      <img src='${filmeRetornado.img}'>
      </article>`;

    filmeCatalogo.innerHTML = "";
  } else {
    alert("Filme não encontrado");
  }
}

function reloadPage() {
  return window.location.reload(true);
}
