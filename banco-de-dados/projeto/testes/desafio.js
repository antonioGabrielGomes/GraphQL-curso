const db = require('../config/db')

async function limparTabelas(){
    await db('usuarios_perfis').delete()
    await db('perfis').delete()
    await db('usuarios').delete()
}

async function salvarUsuario(usuario){ // nome, email, senha
    /*
    let email = usuario.email
    let existente = await db('usuarios')
        .where({ email }).first()
    
    if(!existente) ... 
    */

    const [id] = await db('usuarios').insert(usuario)
    return id
}

async function salvarPerfil(perfil){ // nome rotulo
    /*
    let nome = perfil.nome
    let existente = await db('perfis')
        .where({ nome }).first()
    
    if(!existente) ... 
    */

    const [id] = await db('perfis').insert(perfil)
    return id
}

async function adicionarPerfis(usuario, ...perfis){
    let rows = []
    for(perfil of perfis){
        let row = { usuario_id: usuario, perfil_id: perfil }
        rows.push(row)
    }

    const [id] = await db('usuarios_perfis').insert(rows)
    return id
}

async function executar(){
    await limparTabelas()

    const usuario = await salvarUsuario({ nome:'Ana', email:'ana@empresa.com.br', senha:'123455' })
    const perfilA = await salvarPerfil({ nome:'rh', rotulo:'Pessoal' })
    const perfilB = await salvarPerfil({ nome:'fin', rotulo:'Financeiro' })

    console.log(usuario)
    console.log(perfilA)
    console.log(perfilB)

    await adicionarPerfis(usuario, perfilA, perfilB)
}

executar()
    .catch(err => console.log(err))
    .finally(() => db.destroy())