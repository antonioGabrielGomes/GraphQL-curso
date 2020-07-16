//const { perfis } = require('../data/db')

const perfis = [
    { id: 1, nome: 'Comum' },
    { id: 2, nome: 'Administrador' }
]

module.exports = {
    salario(usuario) {
        return usuario.salario_real
    },
    perfil(usuario) {
        const sels = perfis.filter(p => p.id === usuario.perfil_id)
        return sels ? sels[0] : null
    }
}