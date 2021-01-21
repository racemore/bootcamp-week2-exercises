// Write your Pet model here!
const BaseModel = require('./BaseModel')

class Pet extends BaseModel {
    static get tableName() {
        return 'pets'
    }
    static get virtualAttributes() {
        return ['typeOfPet']
    }
    get typeOfPet() {
        return `${this.type}`
    }
}

module.exports = Pet