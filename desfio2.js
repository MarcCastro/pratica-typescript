"use strict";
var profissoes;
(function (profissoes) {
    profissoes[profissoes["Atriz"] = 0] = "Atriz";
    profissoes[profissoes["Padeiro"] = 1] = "Padeiro";
})(profissoes || (profissoes = {}));
;
const pessoa1 = {
    nome: 'Maria',
    idade: 29,
    profissao: profissoes.Atriz
};
const pessoa2 = {
    nome: 'Roberto',
    idade: 19,
    profissao: profissoes.Padeiro
};
const pessoa3 = {
    nome: 'Laura',
    idade: 32,
    profissao: profissoes.Atriz
};
const pessoa4 = {
    nome: 'Carlos',
    idade: 19,
    profissao: profissoes.Padeiro
};
