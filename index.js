import express from 'express'
import 'dotenv/config'
import routeSinger from './routes/singer.mjs'
import routeSong from './routes/song.mjs'

import './driver/connect-db.mjs'

const app = new express()

//setters
app.set('PORT',process.env.PORT || 4500 )

//use
app.use(express.json())

//middleware
app.use('/singer',routeSinger)
app.use('/song',routeSong)

app.listen(app.get('PORT'),()=>console.log(`Server Ready at Port ${app.get('PORT')}`))