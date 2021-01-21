// Write your relation model here!
const BaseModel = require('./BaseModel')

class Relation extends BaseModel {
    static get tableName() {
        return 'relations'
    }
}

module.exports = Relation
