// Remove a classe 'open' de todos os acordeons ao carregar a página
document.querySelectorAll(".acordeon.open").forEach((item) => {
  item.classList.remove("open");
});

// Seleciona todos os elementos com a classe 'trigger' que estão dentro de elementos com a classe 'acordeon'
const acordeonTriggers = document.querySelectorAll(".acordeon .trigger");

// Para cada trigger encontrada, adiciona um ouvinte de evento de clique
acordeonTriggers.forEach((trigger) => {
  // Quando o trigger for clicado, executa esta função
  trigger.addEventListener("click", (e) => {
    // Pega o elemento pai do trigger, que é o container do acordeon
    const acordeon = trigger.parentElement;
    // Verifica se o acordeon já está aberto (se tem a classe 'open')
    const isOpen = acordeon.classList.contains("open");

    // Se já estiver aberto, remove a classe 'open' para fechar

    if (isOpen) {
      acordeon.classList.remove("open");
    } else {
      acordeon.classList.add("open"); // Se não estiver aberto, adiciona a classe 'open' para abrir
    }
  });
});
