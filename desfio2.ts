enum profissoes {
    Atriz,
    Padeiro
};

interface pessoa {
    nome: string,
    idade: number,
    profissao: profissoes
}

const pessoa1: pessoa = {
    nome: 'Maria',
    idade: 29,
    profissao: profissoes.Atriz
}

const pessoa2: pessoa = {
    nome: 'Roberto',
    idade: 19,
    profissao: profissoes.Padeiro
}

const pessoa3: pessoa = {
    nome: 'Laura',
    idade: 32,
    profissao: profissoes.Atriz
}

const pessoa4: pessoa = {
    nome: 'Carlos',
    idade: 19,
    profissao: profissoes.Padeiro
}