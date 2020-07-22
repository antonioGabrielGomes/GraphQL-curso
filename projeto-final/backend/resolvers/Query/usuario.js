const db = require('../../config/db')
const bcrypt = require('bcrypt-nodejs')
const { getUsuarioLogado } = require('../comum/usuario')

module.exports = {
    async login(_, { dados }){  
        const usuario = await db('usuarios')
            .where({ email: dados.email })
            .first()

        if(!usuario) throw new Error('Usuário/Senha inválido')

        const saoIguais = bcrypt.compareSync(dados.senha, usuario.senha)

        if(!saoIguais) throw new Error('Usuário/Senha inválido')

        return getUsuarioLogado(usuario)
    },
    async usuarios(parent, args, ctx) {
        ctx && ctx.validarAdmin()
        return await db('usuarios')
    },
    async usuario(_, { filtro }) {
        ctx && ctx.validarUsuarioFiltro(filtro)
        if(!filtro) return null
        const where = filtro.id ? { id: filtro.id } : { email: filtro.email }       
        const usuario = await db('usuarios')
            .select()
            .where(where)
            .first()

        return usuario
    },
}