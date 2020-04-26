const { User } = require('../models')

class HomeController {

    static getHome(req, res){
        res.render('home')
    }

    static notFound(req, res){
        res.render('error')
    }

    static login(req, res) {
        res.render('login')
    }

    static loginCheck(req, res) {
        User.findOne({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        })
        .then(result => {
            req.app.locals.isLogin = true
            if ( result ) {
                res.redirect('/')
            } else {
                res.send('Username atau password salah')
            }
        })
        .catch((err) =>{
            res.render('error', { msg: err })
        })
    }

    static register(req, res) {
        if (req.body.password != req.body.confirm_password) {
            res.send('Password dan confirm password berbeda')
        } else {
            User.create({
                username: req.body.username,
                password: req.body.password
            })
                .then(() => {
                   res.redirect('/')
                })
                .catch((err) => {
                    res.render('error', { msg: err })
                })
        }
    }
}

module.exports = HomeController;