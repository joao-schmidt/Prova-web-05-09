const frm = document.querySelector("form");
const respLista = document.querySelector("h5");

const tarefas = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const atividade = frm.inNumero.value;
  tarefas.push(atividade);

  // Ordenar o array tarefas em ordem crescente
  tarefas.sort((a, b) => {
    return a - b;
  });

  let lista = "";

  for (let i = 0; i < tarefas.length; i++) {
    lista += `${tarefas[i]}` + "\n";
  }

  respLista.innerText = lista;

  frm.inNumero.value = "";
  frm.inNumero.focus();
});
