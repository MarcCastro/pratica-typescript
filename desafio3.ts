let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

function somarAoSaldo(soma: number) {
    campoSaldo.innerHTML = (Number(campoSaldo.innerHTML) + soma).toString();
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar?.addEventListener('click', () => {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', () => {
    limparSaldo();
});