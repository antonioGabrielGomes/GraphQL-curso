const db = require('../../config/db')

module.exports = {
    async usuarios() {
        return await db('usuarios')
    },
    async usuario(_, { filtro }) {
        if(!filtro) return null
        const where = filtro.id ? { id: filtro.id } : { email: filtro.email }       
        const usuario = await db('usuarios')
            .select()
            .where(where)
            .first()

        return usuario
    },
}