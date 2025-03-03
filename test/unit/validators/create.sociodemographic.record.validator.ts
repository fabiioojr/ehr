import { SociodemographicRecord } from '../../../src/application/domain/model/sociodemographic.record'
import { DefaultEntityMock } from '../../mocks/models/default.entity.mock'
import { assert } from 'chai'
import { CreateSociodemographicRecordValidator } from '../../../src/application/domain/validator/create.sociodemographic.record.validator'
import { Strings } from '../../../src/utils/strings'
import { ScholarityLevelTypes } from '../../../src/application/domain/utils/scholarity.level.types'

describe('Validators: CreateSociodemographicRecord', () => {
    const activity: SociodemographicRecord = new SociodemographicRecord().fromJSON(DefaultEntityMock.SOCIODEMOGRAPHIC_RECORD)

    it('should return undefined when the validation is successful', () => {
        const result = CreateSociodemographicRecordValidator.validate(activity)
        assert.equal(result, undefined)
    })
    context('when there are validation errors', () => {
        it('should throw an error for does not pass patient_id', () => {
            activity.patient_id = undefined
            try {
                CreateSociodemographicRecordValidator.validate(activity)
            } catch (err) {
                assert.property(err, 'message')
                assert.property(err, 'description')
                assert.propertyVal(err, 'message', 'Required fields were not provided...')
                assert.propertyVal(err, 'description', 'Activity Habits Record validation: patient_id is required!')
            }
        })

        it('should throw an error for does pass invalid patient_id', () => {
            activity.patient_id = '123'
            try {
                CreateSociodemographicRecordValidator.validate(activity)
            } catch (err) {
                assert.property(err, 'message')
                assert.property(err, 'description')
                assert.propertyVal(err, 'message', Strings.ERROR_MESSAGE.UUID_NOT_VALID_FORMAT)
                assert.propertyVal(err, 'description', Strings.ERROR_MESSAGE.UUID_NOT_VALID_FORMAT_DESC)
            } finally {
                activity.patient_id = DefaultEntityMock.SOCIODEMOGRAPHIC_RECORD.patient_id
            }
        })

        it('should throw an error for does not pass color_race', () => {
            activity.color_race = undefined
            try {
                CreateSociodemographicRecordValidator.validate(activity)
            } catch (err) {
                assert.property(err, 'message')
                assert.property(err, 'description')
                assert.propertyVal(err, 'message', 'Required fields were not provided...')
                assert.propertyVal(err, 'description', 'Sociodemographic Record validation: color_race is required!')
            } finally {
                activity.color_race = DefaultEntityMock.SOCIODEMOGRAPHIC_RECORD.color_race
            }
        })
        it('should throw an error for does not pass correct color_race', () => {
            activity.color_race = 'red'
            try {
                CreateSociodemographicRecordValidator.validate(activity)
            } catch (err) {
                assert.property(err, 'message')
                assert.property(err, 'description')
                assert.propertyVal(err, 'message', 'Value not mapped for color_race: red')
                assert.propertyVal(err, 'description', 'The mapped values are: white, black, parda, yellow.')
            } finally {
                activity.color_race = DefaultEntityMock.SOCIODEMOGRAPHIC_RECORD.color_race
            }
        })

        it('should throw an error for does not pass mother_scholarity', () => {
            activity.mother_scholarity = undefined
            try {
                CreateSociodemographicRecordValidator.validate(activity)
            } catch (err) {
                assert.property(err, 'message')
                assert.property(err, 'description')
                assert.propertyVal(err, 'message', 'Required fields were not provided...')
                assert.propertyVal(err, 'description', 'Sociodemographic Record validation: mother_scholarity is required!')
            } finally {
                activity.mother_scholarity = DefaultEntityMock.SOCIODEMOGRAPHIC_RECORD.mother_scholarity
            }
        })

        it('should throw an error for does not pass correct mother_scholarity', () => {
            activity.mother_scholarity = 'invalid'
            try {
                CreateSociodemographicRecordValidator.validate(activity)
            } catch (err) {
                assert.property(err, 'message')
                assert.property(err, 'description')
                assert.propertyVal(err, 'message', 'Value not mapped for mother_scholarity: invalid')
                assert.propertyVal(err, 'description', Strings.ENUM_VALIDATOR.NOT_MAPPED_DESC
                    .concat(Object.values(ScholarityLevelTypes).join(', ').concat('.')))
            } finally {
                activity.mother_scholarity = DefaultEntityMock.SOCIODEMOGRAPHIC_RECORD.mother_scholarity
            }
        })
        it('should throw an error for does not pass people_in_home', () => {
            activity.people_in_home = undefined
            try {
                CreateSociodemographicRecordValidator.validate(activity)
            } catch (err) {
                assert.property(err, 'message')
                assert.property(err, 'description')
                assert.propertyVal(err, 'message', 'Required fields were not provided...')
                assert.propertyVal(err, 'description', 'Sociodemographic Record validation: people_in_home is required!')
            }
        })
    })

})
