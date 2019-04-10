import { Patient } from '../../../src/application/domain/model/patient'
import { DefaultEntityMock } from '../../mocks/models/default.entity.mock'
import { assert } from 'chai'
import { CreatePatientValidator } from '../../../src/application/domain/validator/create.patient.validator'

describe('Validators: CreatePatientValidator', () => {
    const patient: Patient = new Patient().fromJSON(DefaultEntityMock.PATIENT)

    it('should return undefined when the validation is successful', () => {
        const result = CreatePatientValidator.validate(patient)
        assert.equal(result, undefined)
    })

    context('when there are validation errors', () => {
        it('should throw an error for does not pass pilotstudy_id', () => {
            patient.pilotstudy_id = undefined
            try {
                CreatePatientValidator.validate(patient)
            } catch (err) {
                assert.property(err, 'message')
                assert.property(err, 'description')
                assert.propertyVal(err, 'message', 'Required fields were not provided...')
                assert.propertyVal(err, 'description', 'Patient validation: pilotstudy_id is required!')
            }
        })

        it('should throw an error for does pass invalid pilotstudy_id', () => {
            patient.pilotstudy_id = '123'
            try {
                CreatePatientValidator.validate(patient)
            } catch (err) {
                assert.property(err, 'message')
                assert.property(err, 'description')
                assert.propertyVal(err, 'message', 'Some ID provided does not have a valid format!')
                assert.propertyVal(err, 'description', 'A 24-byte hex ID similar to this: 507f191e810c19729de860ea ' +
                    'is expected.')
            } finally {
                patient.pilotstudy_id = DefaultEntityMock.PATIENT.pilotstudy_id
            }
        })

        it('should throw an error for does not pass first_name', () => {
            patient.first_name = undefined
            try {
                CreatePatientValidator.validate(patient)
            } catch (err) {
                assert.property(err, 'message')
                assert.property(err, 'description')
                assert.propertyVal(err, 'message', 'Required fields were not provided...')
                assert.propertyVal(err, 'description', 'Patient validation: first_name is required!')
            } finally {
                patient.first_name = DefaultEntityMock.PATIENT.first_name
            }
        })

        it('should throw an error for does not pass last_name', () => {
            patient.last_name = undefined
            try {
                CreatePatientValidator.validate(patient)
            } catch (err) {
                assert.property(err, 'message')
                assert.property(err, 'description')
                assert.propertyVal(err, 'message', 'Required fields were not provided...')
                assert.propertyVal(err, 'description', 'Patient validation: last_name is required!')
            } finally {
                patient.last_name = DefaultEntityMock.PATIENT.last_name
            }
        })

        it('should throw an error for does not pass gender', () => {
            patient.gender = undefined
            try {
                CreatePatientValidator.validate(patient)
            } catch (err) {
                assert.property(err, 'message')
                assert.property(err, 'description')
                assert.propertyVal(err, 'message', 'Required fields were not provided...')
                assert.propertyVal(err, 'description', 'Patient validation: gender is required!')
            }
        })

        it('should throw an error for does pass invalid gender', () => {
            patient.gender = 'invalid'
            try {
                CreatePatientValidator.validate(patient)
            } catch (err) {
                assert.property(err, 'message')
                assert.property(err, 'description')
                assert.propertyVal(err, 'message', 'Value not mapped for gender: invalid')
                assert.propertyVal(err, 'description', 'The mapped values are: male, female.')
            } finally {
                patient.gender = DefaultEntityMock.PATIENT.gender
            }
        })

        it('should throw an error for does not pass birth_date', () => {
            patient.birth_date = undefined
            try {
                CreatePatientValidator.validate(patient)
            } catch (err) {
                assert.property(err, 'message')
                assert.property(err, 'description')
                assert.propertyVal(err, 'message', 'Required fields were not provided...')
                assert.propertyVal(err, 'description', 'Patient validation: birth_date is required!')
            }
        })

        it('should throw an error for does pass invalid birth_date', () => {
            patient.birth_date = '20-08-1987'
            try {
                CreatePatientValidator.validate(patient)
            } catch (err) {
                assert.property(err, 'message')
                assert.property(err, 'description')
                assert.propertyVal(err, 'message', 'Date: 20-08-1987 is not in valid ISO 8601 format.',)
                assert.propertyVal(err, 'description', 'Date must be in the format: yyyy-MM-dd')
            }
        })
    })
})