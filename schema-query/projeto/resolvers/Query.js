//cosnt { usuarios, perfis } = require('../data/db')

const perfis = [
    { id: 1, nome: 'Comum' },
    { id: 2, nome: 'Administrador' }
]

const usuarios = [
    {
        id: 1,
        nome: 'João Silva',
        email: "jsilva@zemail.com",
        idade: 29,
        perfil_id: 1
    },
    {
        id: 2,
        nome: 'Rafael Junior',
        email: "rafajun@wemail.com",
        idade: 30,
        perfil_id: 2
    },
    {
        id: 3,
        nome: 'Daniela Smith',
        email: "danismi@umail.com",
        idade: 24,
        perfil_id: 1
    }
]

const removerRepetido = (arr) => {

    return arr.filter((e, i) => {

        const rep = arr.find(element => {
            if (i != arr.indexOf(element))
                if (e == element)
                    return element
        });

        if (!rep) return e

    })

}

module.exports = {
    ola() {
        return 'Sou um retorno para Ola'
    },
    horaAtual() {
        return new Date
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Ana da Web',
            email: 'anadaweb@email.com',
            idadde: 23,
            salario_real: 4890.89,
            vip: true
        }
    },
    produtoEmDestaque() {
        return {
            nome: "Notebook",
            preco: 4890.89,
            desconto: 0.15
        }
    },
    numerosMegaSena() {
        const crescente = (a, b) => a - b
        return removerRepetido(Array(6).fill(0)
            .map(n => parseInt(Math.random() * 60 + 1))
            .sort(crescente))
    },
    usuarios() {
        return usuarios
    },
    usuario(_, { id }) {
        const sels = usuarios.filter(u => u.id === id)
        return sels ? sels[0] : null
    },
    perfis() {
        return perfis
    },
    perfil(_, { id }) {
        const sels = perfis.filter(p => p.id === id)
        return sels ? sels[0] : null
    }
}