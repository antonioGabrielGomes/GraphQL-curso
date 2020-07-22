const db = require('../../config/db')

module.exports = {
    async perfis(parent, args, ctx) {
        ctx && ctx.validarAdmin()
        return await db('perfis')
    },
    async perfil(_, { filtro }, ctx) {
        ctx && ctx.validarAdmin()
        if(!filtro) return null
        const where = filtro.id ? { id: filtro.id } : { nome: filtro.nome }       
        const perfil = await db('perfis')
            .select()
            .where(where)
            .first()

        return perfil
    }
}