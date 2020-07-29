const db = require('../data/db-config.js');

const find = () =>{
    return db('cars')
}

const findById = () =>{
    return db('cars').where({ id })
}

const add = (carsData) =>{
    return db('cars').insert(carsData);
}

const update = (changes, id) =>{
    return db('cars').where({ id }).update(changes)
}

const remove = (id) =>{
    return db('cars').where({ id }).del();
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}