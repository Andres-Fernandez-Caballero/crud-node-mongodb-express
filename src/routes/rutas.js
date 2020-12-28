const express = require('express')

const router = express.Router()

const Medicion = require('../models/medicion')

router.get('/', async(req, res) => {
    const mediciones = await Medicion.find()
    console.log(mediciones)
    res.render('index',{mediciones})
})

router.post('/add', async(req, res) => {
     const medicion = new Medicion(req.body)
     await medicion.save()
     res.redirect('/')
})

router.get('/delete/:id', async(req, res) => {
    const {id} = req.params
    await Medicion.remove({_id: id})
    res.redirect('/')
})

router.get('/turn-state/:id', async (req, res) => {
  /*
    const { id } = req.params
    const task = await Task.findById(id)
    task.status = !task.status
    await task.save()
    res.redirect('/')

   */
})

router.get('/edit/:id', async(req, res) => {
    const { id } = req.params
    const medicion = await Medicion.findById(id)
    res.render('edit_task',{medicion})
})

router.post('/edit/:id', async(req, res) => {
    const { id } = req.params
    await Medicion.update({_id: id}, req.body)
    res.redirect('/')
})

module.exports = router