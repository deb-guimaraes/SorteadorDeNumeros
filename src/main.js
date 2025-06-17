const btnSortear = document.querySelector(".btn");
const arrSorteados = [];

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function criarElementoResultado(){
    const qtd = Number(document.querySelector(".num-inp").value);
    const min = Number(document.querySelector(".min-inp").value);
    const max = Number(document.querySelector(".max-inp").value);
    const checkbox = document.querySelector("input[type='checkbox']").checked;

    const divMain = document.querySelector("#div-main");
    const divResult = document.querySelector("#div-result");

    arrSorteados.length = 0;
    divResult.innerHTML = "";

    divMain.hidden = true;
    divResult.hidden = false;

    const title = document.createElement("p");
    title.textContent = "RESULTADO DO SORTEIO";
    divResult.appendChild(title);

    for (let i = 1; i <= qtd; i++) {
        let numSorteado = randomNumber(min, max);

        while (arrSorteados.includes(numSorteado) && checkbox == true) {
            numSorteado = randomNumber(min, max);
        }

        arrSorteados.push(numSorteado);    

        const container = document.createElement("div");
        container.classList.add("resultado");
        
        const result = document.createElement("p");
        result.classList.add("resultado");
        result.innerHTML = `${i}º RESULTADO`;
        title.appendChild(result);

        const elemSpan = document.createElement("span");
        elemSpan.textContent = numSorteado;
        title.appendChild(elemSpan);

    };

    const btnReturn = document.createElement("button");
    btnReturn.classList.add("btn-return");
    btnReturn.innerHTML = `SORTEAR NOVAMENTE <i class="hgi hgi-stroke hgi-replay"></i>`;
    divResult.appendChild(btnReturn);

    btnReturn.addEventListener("click", () => {
        divResult.innerHTML = "";
        divMain.hidden = false;
    });
}


btnSortear.addEventListener("click", (e) => {
    e.preventDefault();
    criarElementoResultado();
});




