let client = require('../dbConnection');
let collection = client.db('test').collection('Cat');

function postCat(cat, callback) {
    collection.insertOne(cat,callback);
}

function getAllCats(callback) {
    collection.find({}).toArray(callback);
}

module.exports = {postCat,getAllCats}