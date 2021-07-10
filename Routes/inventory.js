import express from 'express'
import {parse, v4 as uuidv4 } from 'uuid'

const router = express.Router()
let inventory = [
    {
        productName:"jabon",
        Price:12,
        Quantity:0,
        id:1
    },
    {
        productName:"cake",
        Price:12,
        Quantity:3,
        id:2
    }
]


router.get("/",(req, res)=>{

    res.send(inventory)
})
router.get("/:id",(req, res)=>{
    const {id:productId} = req.params
    const parseProductId = Number.parseInt(productId)
    const itemFound = inventory.find((item) => item.id ==parseProductId)
    res.send(itemFound)
})

router.patch("/:id",(req, res)=>{
    const {id:productId} = req.params
    const parseProductId = Number.parseInt(productId)

    const { Quantity, Price} = req.body
    const itemUpdate = inventory.find((item) => item.id ==parseProductId)
    
    if(Quantity){
        itemUpdate.Quantity = Quantity
    }

    if(Price){
        itemUpdate.Price = Price
    }

    
    res.send("Updated")
})

router.delete("/:id",(req, res)=>{
    const {id:productId} = req.params
    const parseProductId = Number.parseInt(productId)
    
    inventory = inventory.filter((item)=> item.id != parseProductId
    )
    res.send('Item deleted')
})

router.post("/",(req,res)=>{
    console.log('post reached')
    const item = req.body
    const itemId = inventory.length+1

    res.send(`Item Added Correctly ${item.productName}`)
    inventory.push({...item, id: itemId})
})

export default router