import express from 'express'
import bodyParser from 'body-parser'
import routerInventory from './Routes/inventory.js'
import cors from 'cors'

const app = express()
const PORT = 5000

app.use(bodyParser.json())

app.use(cors())

app.use('/inventory',routerInventory)

app.get('/',(req, res)=>{
    console.log("runningggg")
    res.send("DEFAULT HOME PAGE")
})

app.listen(PORT, ()=> console.log(`server here http://localhost:${PORT}`))