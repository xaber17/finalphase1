const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/HomeController')

const routeCustomer = require('./customer')
const routeMenu = require('./menu')

router.get('/', HomeController.getHome)
router.get('/login', HomeController.login)
router.post('/login', HomeController.loginCheck)
router.post('/register', HomeController.register)
router.use('/customers', routeCustomer)
router.use('/menus', (req, res, next) => {
    if (req.app.locals.isLogin) {
        next()
    } else {
        res.redirect('/')
    }
},  routeMenu)
router.get('/*', HomeController.notFound)

module.exports = router