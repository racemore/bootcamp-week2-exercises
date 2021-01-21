const { HasManyRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')
const Relation = require('./Relation')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }
  static get virtualAttributes() {
    return ['fullName']
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  static get relationMappings() {
    const Pet = require('./Pet')
    const Relation = require('./Relation')
    return {
      pets: {
        relation: HasManyRelation,
        modelClass: Pet,
        join: {
          from: 'users.id',
          to: 'pets.ownerId'
        }
      },
      relations: {
        relation: HasManyRelation,
        modelClass: Relation,
        join: {
          from: 'users.id',
          to: 'relations.parentId'
        }
      }
    }
  }
}

module.exports = User
