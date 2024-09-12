window.addEventListener("load", function () {
  var loading = document.getElementById("loading");
  var content = document.getElementById("content");

  // Inicialmente, mantenha o conteúdo invisível
  content.style.opacity = "0";

  const time = setTimeout(() => {
      // Defina a opacidade do loading para 0
      loading.style.opacity = "0";
      
      setTimeout(() => {
          // Após a transição, esconda completamente o elemento de loading
          loading.style.display = "none";
          // Defina a opacidade do conteúdo para 1
          content.style.opacity = "1";
      }, 1000); // Tempo para a transição de fade-out do loading
  }, 3000); // Tempo inicial de carregamento
});


