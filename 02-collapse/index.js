const btn = document.querySelector(".collapsible__button");
const content = document.querySelector(".collapsible__content");

btn.addEventListener("click", btnClick);

function btnClick() {
    content.classList.innerHTML;

    if (content.classList.contains("visible")) {
        content.textContent = "Я невероятное содержимое этого коллапса. Я переверну твой мир... или нет.";
    } else {
    content.textContent = "";
    }

    if (content.classList.contains("visible")) {
        btn.textContent = "Скрыть содержимое";
    } else {
        btn.textContent = "Показать содержимое";
    }

    content.classList.toggle("visible");
}

content.animate(
    [
      { transform: 'rotateY(0deg)', color: '#000' },
      { color: 'yellow', offset: 0.333 },
      { transform: 'rotateY(360deg)', color: '#000' }
    ], {
      duration: 3000,
      iterations: Infinity,
    }
);

btn.animate(
    [
      { transform: 'scale3d(1, 2, 3)', color: 'red' },
      { color: 'blue', offset: 0.333 },
      { transform: 'scale3d(-1, -2, 0)', color: 'red' }
    ], {
      duration: 5000,
      iterations: Infinity,
    }
);
