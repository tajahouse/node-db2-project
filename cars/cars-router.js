const express = require('express');
const cars = require("./cars-model.js")
// const db = require('../data/db-config')
const router = express.Router();

// router.get('/', (req, res)=>{
//     db('cars')
//     .then(cars=>{
//         res.status(200).json(cars);
//     })
//     .catch(err=>{
//         res.status(500).json({ message: 'Failed to get cars data',
//                                err })
//     })
// });

router.get('/', (req, res)=>{
    cars.find()
    .then(cars=>{
        res.status(200).json(cars);
    })
    .catch(err=>{
        res.status(500).json({ message: 'Failed to get cars data'})
    })
});
// router.get('/:id', (req, res) => {
//     const { id } = req.params;
  
//     db('cars').where({ id }).first()
//       .then(car => {
//         res.json(car);
//       })
//       .catch(err => {
//         res.status(500).json({ message: 'Failed to retrieve car' });
//       });
//   });

router.get('/:id', (req, res)=>{
    const { id } = req.params;
    
    cars.findById(id)
    .then(cars =>{
        const car = cars[0];
        cars ? res.status(200).json(car): res.status(404).json({
            message: `Couldn't find car with given id`
        })
    })
    .catch(err =>{
        res.status(500).json({
            message: `Couldn't get car`
        })
    })
})

// router.post('/', (req, res) => {
//     const carData = req.body;
//     db('cars').insert(carData)
//       .then(data => {
//         db('cars').where({ id: data[0] })
//           .then(newCar => {
//             res.status(201).json(newCar);
//           });
//       })
//       .catch(err => {
//         console.log('POST error', err);
//         res.status(500).json({ message: "Failed to store data" });
//       });
//   });

router.post('/', (req,res)=>{
    const carData = req.body;
    cars.add(carData)
    .then(data =>{
        res.status(201).json({ created: data[0]})
    })
    .catch(err =>{
        res.status(500).json({
            message: `Couldn't create new car`
        })
    })
})

router.put("/:id", (req, res)=>{
    const { id } = req.params;
    const changes = req.body;
    cars.update(changes, id)
    .then(count =>{
        count ? res.status(204).json({ update: count}) : res.status(404).json({
            message: `Couldn't find car with given id`
        })
    })
    .catch(err =>{
        res.status(500).json({
            message: `Couldn't update car`
        })
    })
})

router.delete("/:id", (req, res)=>{
    const { id } = req.params;
    cars.remove( id)
    .then(count =>{
        count ? res.status(204).json({ update: count}) : res.status(404).json({
            message: `Couldn't find car with given id`
        })
    })
    .catch(err =>{
        res.status(500).json({
            message: `Couldn't delete car`
        })
    })
})

module.exports = router;