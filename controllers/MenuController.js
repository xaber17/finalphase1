const  { Menu, Customer, Order } = require('../models')
const formatUang = require('../helper/formatUang')

class MenuController {

    static show(req, res){
        Menu.findAll(
            { 
                include: [{model : Customer}]
            }
        )
        .then( data => {
            // res.send(data)
            res.render('menu', {data, formatUang})
        })
        .catch( (err) => {
            res.render('error', {msg: err})
        })
    }

    static addPage(req, res){
        const alert = req.query
        res.render('add-menu', {alert})
    }

    static postAddPage(req, res){
       
        Menu.create({
            name: req.body.name,
            price: req.body.price,
        })
        .then( () => {
            res.redirect(`/menus`)
        })
        .catch( err => {
            const msg = []
            for(let i = 0; i < err.errors.length; i++){
                msg.push(err.errors[i].message)
            }
            res.redirect(`/menus/add?msg=${msg.join(', ')}`)
        })
    }

    static editPage(req, res){
        Menu.findByPk(Number(req.params.id))
        .then( data =>{
            res.render('edit-menu', {data})
        })
        .catch ( err => {
            res.render('error', {msg:err})
        })

    }

    static postEditPage(req, res){
        Menu.update(
            {
                name: req.body.name,
                price: req.body.price
            },
            {
                where: {
                    id: Number(req.params.id)  
                }
            }
        )
        .then( () => {
            res.redirect(`/menus`)
        })
        .catch( err => {
            res.send('error', {msg : err})
        })
    }

    static delete(req, res){
        Menu.destroy({
            where:{
                id: Number(req.params.id)
            }
        })
        .then( () => {
            res.redirect(`/menus`)
            return Order.destroy({
                where: {
                    MenuId: Number(req.params.id)
                }
            })
        })
        .catch( () =>{
            res.render('error')
        })
    }

    static order(req, res){
        Menu.findByPk(Number(req.params.id), {
            include: [{ model : Customer}]
        })
        .then( data => {
            // res.send(data)
            res.render('order', {data})
        })
        .catch( err => {
            res.render('error')
        })
    }
}

module.exports = MenuController;