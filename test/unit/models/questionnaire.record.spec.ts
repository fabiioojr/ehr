import { QuestionnaireRecord } from '../../../src/application/domain/model/questionnaire.record'
import { assert } from 'chai'
import { DefaultEntityMock } from '../../mocks/models/default.entity.mock'

describe('Models: QuestionnaireRecord', () => {
    describe('fromJSON()', () => {
        context('when the json contain all parameters', () => {
            it('should return the class with parameters set', () => {
                const result = new QuestionnaireRecord().fromJSON(DefaultEntityMock.ACTIVITY_HABITS_RECORD)
                assert.equal(result.patient_id, DefaultEntityMock.ACTIVITY_HABITS_RECORD.patient_id)
            })
        })

        context('when the json is undefined', () => {
            it('should return the class without parameters', () => {
                const result = new QuestionnaireRecord().fromJSON(undefined)
                assert.equal(result.id, undefined)
                assert.equal(result.patient_id, undefined)
                assert.equal(result.created_at, undefined)
                assert.equal(result.type, undefined)
            })
        })

        context('when the json is empty', () => {
            it('should return the class without parameters', () => {
                const result = new QuestionnaireRecord().fromJSON({})
                assert.equal(result.id, undefined)
                assert.equal(result.patient_id, undefined)
                assert.equal(result.created_at, undefined)
                assert.equal(result.type, undefined)
            })
        })

        context('when pass json as string', () => {
            it('should return the object with json parameters set', () => {
                const result = new QuestionnaireRecord().fromJSON(JSON.stringify(DefaultEntityMock.ACTIVITY_HABITS_RECORD))
                assert.equal(result.patient_id, DefaultEntityMock.ACTIVITY_HABITS_RECORD.patient_id)
            })

            it('should return the class without parameters for empty string', () => {
                const result = new QuestionnaireRecord().fromJSON('')
                assert.equal(result.id, undefined)
                assert.equal(result.patient_id, undefined)
                assert.equal(result.created_at, undefined)
                assert.equal(result.type, undefined)
            })
        })

        context('when pass the parameters', () => {
            it('should return the object with set patient_id', () => {
                const result = new QuestionnaireRecord().fromJSON({
                    patient_id: DefaultEntityMock.ACTIVITY_HABITS_RECORD.patient_id
                })
                assert.equal(result.patient_id, DefaultEntityMock.ACTIVITY_HABITS_RECORD.patient_id)
                assert.equal(result.created_at, undefined)
                assert.equal(result.type, undefined)
            })

            it('should return the object with set created_at', () => {
                const result = new QuestionnaireRecord().fromJSON({
                    patient_id: DefaultEntityMock.ACTIVITY_HABITS_RECORD.patient_id,
                    created_at: DefaultEntityMock.ACTIVITY_HABITS_RECORD.created_at
                })
                assert.equal(result.patient_id, DefaultEntityMock.ACTIVITY_HABITS_RECORD.patient_id)
                assert.equal(result.type, undefined)
            })
        })
    })

    describe('toJSON()', () => {
        context('when the object contains all parameters set', () => {
            it('should return the object as JSON', () => {
                const activity = new QuestionnaireRecord().fromJSON(DefaultEntityMock.ACTIVITY_HABITS_RECORD)
                const result = activity.toJSON()
                assert.equal(result.patient_id, undefined)
            })
        })

        context('when some parameter is missing', () => {
            it('should return json without created_at', () => {
                const activity = new QuestionnaireRecord().fromJSON({
                    patient_id: DefaultEntityMock.ACTIVITY_HABITS_RECORD.patient_id
                })
                const result = activity.toJSON()
                assert.equal(result.created_at, undefined)
            })
        })
    })
})
