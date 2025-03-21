import Song from '../models/Song.mjs'
import Singer from '../models/Singer.mjs'

async function getAll(req,res){
  try{
    const result = await Song.find({})

    return res.status(200).json({"state":true,"data":result})
  }catch(err){
    return res.status(500).json({"state":false,"error":err})
  }
}

async function save(req,res){
  const {id} = req.params
  try{
    const singer = await Singer.findById(id)
    if( singer ){
      const song = new Song(req.body)
      singer.songs.push(song)
      await singer.save()

      song.singer = singer
      const result = await song.save()

      return res.status(200).json({"state":true,"data":result})
    }else{
      return res.status(404).json({"state":true,"data":null})
    }
    
  }catch(err){
    return res.status(500).json({"state":false,"error":err})
  }
}

export {
  getAll,
  save
}