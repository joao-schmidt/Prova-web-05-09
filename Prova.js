const frm = document.querySelector("form");
const respLista= document.querySelector("pre");


const tarefas =[];
frm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const atividades= Number(frm.inNumero.value);
    tarefas.push(atividades);
    console.log(tarefas);
    let lista="";
    
    
        for (let i = 0; i < tarefas.length; i++) {
         lista += `${i + 1}- ${tarefas[i]}\n`;
         }
         
            tarefas.forEach((tarefa, i) => {
                return (lista +=`${i+1}. ${tarefas[i]}\n`);
             
             
         })
        

      respLista.innerText = lista;
      frm.inNumero.value = "";
      frm.inNumero.focus();

})



frm.addEventListener("reset", () =>{
    resp.innerText = "";
})