import { assert } from 'chai'
import { ObjectIdValidator } from '../../../src/application/domain/validator/object.id.validator'
import { ObjectID } from 'bson'

describe('Validators: ObjectIdValidator', () => {
    it('should return undefined when the validation was successful', () => {
        const result = ObjectIdValidator.validate(`${new ObjectID()}`)
        assert.equal(result, undefined)
    })

    context('when there are validation errors', () => {
        it('should throw an error for invalid object id', () => {
            try {
                ObjectIdValidator.validate('123')
            } catch (err) {
                assert.property(err, 'message')
                assert.property(err, 'description')
                assert.equal(err.message, 'Some ID provided does not have a valid format!')
                assert.equal(err.description, 'A 24-byte hex ID similar to this: 507f191e810c19729de860ea is expected.')
            }
        })

        it('should throw an error for invalid object id', () => {
            try {
                ObjectIdValidator.validate('123', 'any message')
            } catch (err) {
                assert.property(err, 'message')
                assert.property(err, 'description')
                assert.propertyVal(err, 'message', 'any message')
                assert.propertyVal(err, 'description',
                    'A 24-byte hex ID similar to this: 507f191e810c19729de860ea is expected.')
            }
        })
    })
})
