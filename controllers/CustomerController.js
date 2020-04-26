const { Customer, Menu, Order } = require('../models')
const formatUang = require('../helper/formatUang')

class CustomerController {

    static show(req, res) {
        const alert = req.query
        Customer.findAll(
        )
            .then(data => {
                // res.send('Finally in Customers from Controller')
                // res.send(data)
                res.render('customer', { data, alert })
            })
            .catch((err) => {
                res.render('error', { msg: err })
            })
    }

    static addPage(req, res) {
        // const alert = req.query
        Customer.findAll()
            .then(data => {
                // res.send(data)
                res.render('add-customer', { data })
            })
            .catch(() => {
                res.render('error')
            })

    }

    static postAddPage(req, res) {
        Customer.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            phone: req.body.phone
        })
            .then(() => {
                const msg = `Succesfully added new customer '${req.body.firstname}' '${req.body.lastname}`
                res.redirect(`/customers?msg=${msg}`)
            })
            .catch((err) => {
                res.render('error', { msg: err })
            })
    }

    static editPage(req, res) {
        // const alert = req.query
        // let newData
        // ProductionHouse.findAll()
        // .then( temp => {
        //     newData = temp
        //     return Customer.findByPk(Number(req.params.id))
        // })
        // .then( data => {
        //     res.render('edit-movie', {data, newData, alert})
        // })
        // .catch( () => {
        //     res.render('error')
        // })

    }

    static postEditPage(req, res) {
        // Customer.update({
        //         name: req.body.name,
        //         released_year: req.body.released_year,
        //         genre: req.body.genre,
        //         ProductionHouseId : req.body.ProductionHouseId
        // }, {
        //     where: {
        //         id: Number(req.params.id)  
        //     }
        // })
        // .then( () => {
        //     const msg = `Successfully edit selected Customer.`
        //     res.redirect(`/movies?msg=${msg}`)
        // })
        // .catch( (err) => {
        //     res.render('error', {msg: err})
        // })
    }

    static delete(req, res) {
        Customer.destroy({
            where: {
                id: Number(req.params.id)
            }
        })
            .then(() => {
                const msg = `Successfully remove customer.`
                res.redirect(`/customers?msg=${msg}`)
            })
            .catch((err) => {
                res.render('error', { msg: err })
            })
    }

    static addChoose(req, res) {
        const alert = req.query
        let dataMenu = null
        let data = null
        Menu.findAll()
            .then(data1 => {
                dataMenu = data1
                return Customer.findByPk(Number(req.params.id), { include: { model: Menu } })
            })
            .then(data2 => {
                data = data2
                return Order.findAll({
                    where: {
                        CustomerId: req.params.id
                    }
                })
            })
            .then(dataOrder => {
                res.render('add-Order', { data, dataMenu, dataOrder, alert, formatUang })
            })
            .catch((err) => {
                // res.send(err)
                res.render('error', { msg: err })
            })
    }

    static postAddChoose(req, res) {
        Order.create({
            CustomerId: req.body.CustomerId,
            MenuId: req.body.MenuId,
            notes: req.body.notes
        })
            .then(() => {
                res.redirect(`/customers/addchoose/${req.params.id}`)
            })
            .catch(err => {
                const msg = []
                for (let i = 0; i < err.errors.length; i++) {
                    msg.push(err.errors[i].message)
                }
                res.redirect(`/customers/addchoose/${req.params.id}?msg=${msg.join(', ')}&type=danger`)
            })
    }

    static confirm(req, res) {
        let data = null
        Customer.findByPk(Number(req.params.id), {include: [Menu]})
            .then(data2 => {
                data = data2
                return Order.findAll({
                    where: {
                        CustomerId: req.params.id
                    }
                })
            })
            .then(dataOrder => {
                // res.send({ object: data, object2: dataOrder })
                res.render('confirm', { object: data, object2: dataOrder })
            })
            .catch(err => {
                res.render('error', { msg: err });
            })
    }
}

module.exports = CustomerController;