const frm = document.querySelector("form");
const respLista = document.querySelector("h5");

const Numeros = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const Numero= frm.inNumero.value;
  Numeros.push(Numero);

  // Ordenar o array tarefas em ordem crescente
  Numeros.sort((a, b) => {
    return a - b;
  });

  let lista = "";

  for (let i = 0; i < Numeros.length; i++) {
    lista += `${Numeros[i]}` + "\n";
  }

  respLista.innerText = lista;

  frm.inNumero.value = "";
  frm.inNumero.focus();
});
frm.btnRemover.addEventListener("click",() =>{
        if(Numeros.length==0){ //valida para que nao fique em vazio o formulario
            alert("Nº nao consta na lista");
            frm.inNumeros.focus([]);
            return;
        }
        
        console.log("Botao Remover Clicado");
        
        const Num= Numeros.pop(); 
        respLista.innerText = Num;
        let lista="";
        
    
        Numeros.forEach((numero, i) => (lista +=`${i+1}. ${Numeros[i]}\n`));
        respLista.innerText = lista;
   
});