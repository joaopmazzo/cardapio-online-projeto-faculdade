function showSuccessMessage(nome) {
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  const title = document.createElement("h2");
  title.textContent = `Obrigado, ${nome}!`;

  const message = document.createElement("p");
  message.textContent =
    "Sua mensagem foi enviada com sucesso! Em breve, nossa equipe entrará em contato com você.";

  const closeButton = document.createElement("button");
  closeButton.textContent = "Fechar";
  closeButton.className = "modal-close-button";

  modalContent.appendChild(title);
  modalContent.appendChild(message);
  modalContent.appendChild(closeButton);
  modalOverlay.appendChild(modalContent);

  document.body.appendChild(modalOverlay);

  closeButton.addEventListener("click", () => {
    modalOverlay.remove();
  });

  modalOverlay.addEventListener("click", e => {
    if (e.target === modalOverlay) {
      modalOverlay.remove();
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && document.body.contains(modalOverlay)) {
      modalOverlay.remove();
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll("nav a");

  menuLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");

      if (targetId === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }

      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  const menuButton = document.querySelector("main button");
  if (menuButton) {
    menuButton.addEventListener("click", function () {
      const cardapioSection = document.querySelector("#cardapio");
      if (cardapioSection) {
        cardapioSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }

  const form = document.querySelector(".entre-em-contato-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nomeInput = this.querySelector("#nome");
      const nome = nomeInput.value.split(" ")[0];

      showSuccessMessage(nome);

      this.reset();
    });
  }
});
