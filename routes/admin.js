const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../util/path')

const products = []

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        dataTitle: 'Add Product',
        path: '/admin/add-product'
    })
})

router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title })
    res.redirect('/')
})

module.exports = {
    router,
    products
}