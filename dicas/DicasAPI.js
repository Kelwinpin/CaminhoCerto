const URL_BASE = 'https://api-caminho-certo.tarleylana.repl.co/api/dicas/'

const buscarTodas = async () =>{
  const res = await fetch(URL_BASE)
  
  return res.json()
}

const buscarPorId = async(id) =>{
  const res = await fetch(URL_BASE+ id)

  return res.json()
}

export{
  buscarTodas,
  buscarPorId
}