import { ChronicDisease } from '../../../src/application/domain/model/chronic.disease'
import { assert } from 'chai'
import { DefaultEntityMock } from '../../mocks/models/default.entity.mock'

describe('Models: ChronicDisease', () => {
    describe('fromJSON()', () => {
        context('when the json contain all parameters', () => {
            it('should return the class with parameters set', () => {
                const result = new ChronicDisease().fromJSON(DefaultEntityMock.CHRONIC_DISEASE)
                assert.equal(result.type, DefaultEntityMock.CHRONIC_DISEASE.type)
                assert.equal(result.disease_history, DefaultEntityMock.CHRONIC_DISEASE.disease_history)
            })
        })

        context('when the json is undefined', () => {
            it('should return the class without parameters', () => {
                const result = new ChronicDisease().fromJSON(undefined)
                assert.equal(result.type, undefined)
                assert.equal(result.disease_history, undefined)

            })
        })

        context('when the json is empty', () => {
            it('should return the class without parameters', () => {
                const result = new ChronicDisease().fromJSON({})
                assert.equal(result.type, undefined)
                assert.equal(result.disease_history, undefined)
            })
        })

        context('when pass json as string', () => {
            it('should return the object with json parameters set', () => {
                const result = new ChronicDisease().fromJSON(JSON.stringify(DefaultEntityMock.CHRONIC_DISEASE))
                assert.equal(result.type, DefaultEntityMock.CHRONIC_DISEASE.type)
                assert.equal(result.disease_history, DefaultEntityMock.CHRONIC_DISEASE.disease_history)
            })

            it('should return the class without parameters for empty string', () => {
                const result = new ChronicDisease().fromJSON('')
                assert.equal(result.type, undefined)
                assert.equal(result.disease_history, undefined)
            })
        })

        context('when pass the parameters', () => {
            it('should return the object with set type', () => {
                const result = new ChronicDisease().fromJSON({
                    type: DefaultEntityMock.CHRONIC_DISEASE.type
                })
                assert.equal(result.type, DefaultEntityMock.CHRONIC_DISEASE.type)
                assert.equal(result.disease_history, undefined)
            })

            it('should return the object with set disease_history', () => {
                const result = new ChronicDisease().fromJSON(DefaultEntityMock.CHRONIC_DISEASE)
                assert.equal(result.type, DefaultEntityMock.CHRONIC_DISEASE.type)
                assert.equal(result.disease_history, DefaultEntityMock.CHRONIC_DISEASE.disease_history)
            })
        })
    })
})
