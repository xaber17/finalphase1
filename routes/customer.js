const express = require('express')
const router = express.Router()

const CustomerController = require('../controllers/CustomerController')

router.get('/', CustomerController.show)
router.get('/add', CustomerController.addPage)
router.post('/add', CustomerController.postAddPage)
// router.get('/edit/:id', CustomerController.editPage)
// router.post('/edit/:id', CustomerController.postEditPage)
router.get('/delete/:id', CustomerController.delete)
router.get('/addchoose/:id', CustomerController.addChoose)
router.post('/addchoose/:id', CustomerController.postAddChoose)
router.get('/confirm/:id', CustomerController.confirm)

module.exports = router