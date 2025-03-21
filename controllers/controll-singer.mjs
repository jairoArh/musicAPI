import Singer from './../models/Singer.mjs'

async function getAll(req,res){
  try{
    const result = await Singer.find({})

    return res.status(200).json({"state":true,"data":result})
  }catch(err){
    return res.status(500).json({"state":false,"error":err})
  }
}

async function getById(req,res){
  const {id} = req.params

  try{
    const result = await Singer.findById(id).populate('songs')

    return res.status(200).json({"state":true,"data":result})
  }catch(err){
    return res.status(500).json({"state":false,"error":err})
  }
}

async function save(req,res){
   try{
    const singer = new Singer(req.body)
    const result = await singer.save()

    return res.status(200).json({"state":true,"data":result})
  }catch(err){
    return res.status(500).json({"state":false,"error":err})
  }

  return res.status(200).json({"state":true,"data":{"id":id,"name":name,"country":country}})
}

export{
  getAll,
  getById,
  save
}