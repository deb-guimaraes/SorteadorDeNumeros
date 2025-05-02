const btnSortear = document.querySelector("#btn");

const checkbox = document.querySelector(".checkbox");

const arrSorteados = [];

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

btnSortear.addEventListener("click", (e) => {
    e.preventDefault();

    const qtd = Number(document.querySelector(".num-inp").value);
    const min = Number(document.querySelector(".min-inp").value);
    const max = Number(document.querySelector(".max-inp").value);
    const checkbox = document.querySelector("input[type='checkbox']").value;
    document.querySelector("#div-main").hidden = true;

    const div = document.createElement("div");
    div.classList.add("div-result");

    const footer = document.querySelector("footer");
    footer.parentNode.insertBefore(div, footer);


    const p = document.createElement("p");
    p.textContent = "RESULTADO DO SORTEIO";
    div.appendChild(p);


    for (let i = 1; i <= qtd; i++) {
        const numSorteado = randomNumber(min, max);

        while (arrSorteados.includes(numSorteado) && checkbox == true) {
            numSorteado = randomNumber(min, max);
        }

        arrSorteados.push(numSorteado);

        const resultado = document.createElement("p");
        resultado.classList.add("resultado");
        resultado.innerHTML = `${i}º RESULTADO`;
        p.appendChild(resultado);

        const elSpan = document.createElement("span");
        elSpan.textContent = numSorteado;
        p.appendChild(elSpan);

    } 



});

