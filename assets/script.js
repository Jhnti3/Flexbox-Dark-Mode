const mode = document.getElementById("mode_icon"); // Pega a referência para o elemento HTML com o ID "mode_icon" e armazena na variável "mode"

// Adiciona um ouvinte de evento de clique ao elemento "mode"
mode.addEventListener("click", () => {
  const form = document.getElementById("login_form"); // Pega a referência para o elemento HTML com o ID "login_form" e armazena na variável "form"

  // Verifica se a classe CSS "fa-moon" está presente no elemento "mode"
  if (mode.classList.contains("fa-moon")) {
    mode.classList.remove("fa-moon"); // se a classe "fa-moon" estiver presente, significa que o ícone atual é a lua (modo escuro)
    mode.classList.add("fa-sun"); // Adiciona a classe "fa-sun" ao elemento "mode" (troca o ícone para o sol)

    form.classList.add("dark"); // Adiciona a classe "dark" ao elemento "form" (ativa o modo escuro)
    return; // Sai da função de clique
  }
  // Se a classe "fa-moon" não estiver presente, significa que o ícone atual é o sol (modo claro)
  mode.classList.remove("fa-sun"); // Remove a classe "fa-sun" do elemento "mode"
  mode.classList.add("fa-moon"); // Adiciona a classe "fa-moon" ao elemento "mode" (troca o ícone para a lua)

  form.classList.remove("dark"); // Remove a classe "dark" do elemento "form" (desativa o modo escuro)
});
