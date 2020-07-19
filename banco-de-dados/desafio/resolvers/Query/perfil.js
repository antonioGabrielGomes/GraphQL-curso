const db = require('../../config/db')

module.exports = {
    async perfis() {
        return await db('perfis')
    },
    async perfil(_, { filtro }) {
        if(!filtro) return null
        const where = filtro.id ? { id: filtro.id } : { nome: filtro.nome }       
        const perfil = await db('perfis')
            .select()
            .where(where)
            .first()

        return perfil
    }
}