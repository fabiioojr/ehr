import { assert } from 'chai'
import { DefaultEntityMock } from '../../mocks/models/default.entity.mock'
import { FeedingHabitsRecord } from '../../../src/application/domain/model/feeding.habits.record'

describe('Models: FeedingHabitsRecord', () => {
    describe('fromJSON()', () => {
        context('when the json contain all parameters', () => {
            it('should return the class with parameters set', () => {
                const result = new FeedingHabitsRecord().fromJSON(DefaultEntityMock.FEEDING_HABITS_RECORD)
                assert.equal(result.patient_id, DefaultEntityMock.FEEDING_HABITS_RECORD.patient_id)
            })
        })

        context('when the json is undefined', () => {
            it('should return the class without parameters', () => {
                const result = new FeedingHabitsRecord().fromJSON(undefined)
                assert.equal(result.id, undefined)
                assert.equal(result.patient_id, undefined)
                assert.equal(result.created_at, undefined)
                assert.equal(result.type, DefaultEntityMock.FEEDING_HABITS_RECORD.type)
            })
        })

        context('when the json is empty', () => {
            it('should return the class without parameters', () => {
                const result = new FeedingHabitsRecord().fromJSON({})
                assert.equal(result.id, undefined)
                assert.equal(result.patient_id, undefined)
                assert.equal(result.created_at, undefined)
                assert.equal(result.type, DefaultEntityMock.FEEDING_HABITS_RECORD.type)
            })
        })

        context('when pass json as string', () => {
            it('should return the object with json parameters set', () => {
                const result = new FeedingHabitsRecord().fromJSON(JSON.stringify(DefaultEntityMock.FEEDING_HABITS_RECORD))
                assert.equal(result.patient_id, DefaultEntityMock.FEEDING_HABITS_RECORD.patient_id)
            })

            it('should return the class without parameters for empty string', () => {
                const result = new FeedingHabitsRecord().fromJSON('')
                assert.equal(result.id, undefined)
                assert.equal(result.patient_id, undefined)
                assert.equal(result.created_at, undefined)
                assert.equal(result.type, DefaultEntityMock.FEEDING_HABITS_RECORD.type)
            })
        })

        context('when pass the parameters', () => {
            it('should return the object with set patient_id', () => {
                const result = new FeedingHabitsRecord().fromJSON({
                    patient_id: DefaultEntityMock.FEEDING_HABITS_RECORD.patient_id
                })
                assert.equal(result.patient_id, DefaultEntityMock.FEEDING_HABITS_RECORD.patient_id)
                assert.equal(result.created_at, undefined)
                assert.equal(result.type, DefaultEntityMock.FEEDING_HABITS_RECORD.type)
            })

            it('should return the object with set created_at', () => {
                const result = new FeedingHabitsRecord().fromJSON({
                    patient_id: DefaultEntityMock.FEEDING_HABITS_RECORD.patient_id,
                    created_at: DefaultEntityMock.FEEDING_HABITS_RECORD.created_at
                })
                assert.equal(result.patient_id, DefaultEntityMock.FEEDING_HABITS_RECORD.patient_id)
                assert.equal(result.type, DefaultEntityMock.FEEDING_HABITS_RECORD.type)
            })

            it('should return the object with set weekly_feeding_habits', () => {
                const result = new FeedingHabitsRecord().fromJSON({
                    patient_id: DefaultEntityMock.FEEDING_HABITS_RECORD.patient_id,
                    created_at: DefaultEntityMock.FEEDING_HABITS_RECORD.created_at,
                    weekly_feeding_habits: DefaultEntityMock.FEEDING_HABITS_RECORD.weekly_feeding_habits
                })
                assert.equal(result.patient_id, DefaultEntityMock.FEEDING_HABITS_RECORD.patient_id)
                assert.equal(result.type, DefaultEntityMock.FEEDING_HABITS_RECORD.type)
                assert.equal(result.weekly_feeding_habits, DefaultEntityMock.FEEDING_HABITS_RECORD.weekly_feeding_habits)
            })

            it('should return the object with set daily_water_glasses', () => {
                const result = new FeedingHabitsRecord().fromJSON({
                    patient_id: DefaultEntityMock.FEEDING_HABITS_RECORD.patient_id,
                    created_at: DefaultEntityMock.FEEDING_HABITS_RECORD.created_at,
                    weekly_feeding_habits: DefaultEntityMock.FEEDING_HABITS_RECORD.weekly_feeding_habits,
                    daily_water_glasses: DefaultEntityMock.FEEDING_HABITS_RECORD.daily_water_glasses
                })
                assert.equal(result.patient_id, DefaultEntityMock.FEEDING_HABITS_RECORD.patient_id)
                assert.equal(result.type, DefaultEntityMock.FEEDING_HABITS_RECORD.type)
                assert.equal(result.weekly_feeding_habits, DefaultEntityMock.FEEDING_HABITS_RECORD.weekly_feeding_habits)
                assert.equal(result.daily_water_glasses, DefaultEntityMock.FEEDING_HABITS_RECORD.daily_water_glasses)
            })

            it('should return the object with set six_month_breast_feeding', () => {
                const result = new FeedingHabitsRecord().fromJSON({
                    patient_id: DefaultEntityMock.FEEDING_HABITS_RECORD.patient_id,
                    created_at: DefaultEntityMock.FEEDING_HABITS_RECORD.created_at,
                    weekly_feeding_habits: DefaultEntityMock.FEEDING_HABITS_RECORD.weekly_feeding_habits,
                    daily_water_glasses: DefaultEntityMock.FEEDING_HABITS_RECORD.daily_water_glasses,
                    six_month_breast_feeding: DefaultEntityMock.FEEDING_HABITS_RECORD.six_month_breast_feeding
                })
                assert.equal(result.patient_id, DefaultEntityMock.FEEDING_HABITS_RECORD.patient_id)
                assert.equal(result.type, DefaultEntityMock.FEEDING_HABITS_RECORD.type)
                assert.equal(result.weekly_feeding_habits, DefaultEntityMock.FEEDING_HABITS_RECORD.weekly_feeding_habits)
                assert.equal(result.daily_water_glasses, DefaultEntityMock.FEEDING_HABITS_RECORD.daily_water_glasses)
                assert.equal(result.six_month_breast_feeding, DefaultEntityMock.FEEDING_HABITS_RECORD.six_month_breast_feeding)
            })

            it('should return the object with set food_allergy_intolerance', () => {
                const result = new FeedingHabitsRecord().fromJSON({
                    patient_id: DefaultEntityMock.FEEDING_HABITS_RECORD.patient_id,
                    created_at: DefaultEntityMock.FEEDING_HABITS_RECORD.created_at,
                    weekly_feeding_habits: DefaultEntityMock.FEEDING_HABITS_RECORD.weekly_feeding_habits,
                    daily_water_glasses: DefaultEntityMock.FEEDING_HABITS_RECORD.daily_water_glasses,
                    six_month_breast_feeding: DefaultEntityMock.FEEDING_HABITS_RECORD.six_month_breast_feeding,
                    food_allergy_intolerance: DefaultEntityMock.FEEDING_HABITS_RECORD.food_allergy_intolerance
                })
                assert.equal(result.patient_id, DefaultEntityMock.FEEDING_HABITS_RECORD.patient_id)
                assert.equal(result.type, DefaultEntityMock.FEEDING_HABITS_RECORD.type)
                assert.equal(result.weekly_feeding_habits, DefaultEntityMock.FEEDING_HABITS_RECORD.weekly_feeding_habits)
                assert.equal(result.daily_water_glasses, DefaultEntityMock.FEEDING_HABITS_RECORD.daily_water_glasses)
                assert.equal(result.six_month_breast_feeding, DefaultEntityMock.FEEDING_HABITS_RECORD.six_month_breast_feeding)
                assert
                    .deepEqual(result.food_allergy_intolerance, DefaultEntityMock.FEEDING_HABITS_RECORD.food_allergy_intolerance)
            })

            it('should return the object with set breakfast_daily_frequency', () => {
                const result = new FeedingHabitsRecord().fromJSON({
                    patient_id: DefaultEntityMock.FEEDING_HABITS_RECORD.patient_id,
                    created_at: DefaultEntityMock.FEEDING_HABITS_RECORD.created_at,
                    weekly_feeding_habits: DefaultEntityMock.FEEDING_HABITS_RECORD.weekly_feeding_habits,
                    daily_water_glasses: DefaultEntityMock.FEEDING_HABITS_RECORD.daily_water_glasses,
                    six_month_breast_feeding: DefaultEntityMock.FEEDING_HABITS_RECORD.six_month_breast_feeding,
                    food_allergy_intolerance: DefaultEntityMock.FEEDING_HABITS_RECORD.food_allergy_intolerance,
                    breakfast_daily_frequency: DefaultEntityMock.FEEDING_HABITS_RECORD.breakfast_daily_frequency
                })
                assert.equal(result.patient_id, DefaultEntityMock.FEEDING_HABITS_RECORD.patient_id)
                assert.equal(result.type, DefaultEntityMock.FEEDING_HABITS_RECORD.type)
                assert.equal(result.weekly_feeding_habits, DefaultEntityMock.FEEDING_HABITS_RECORD.weekly_feeding_habits)
                assert.equal(result.daily_water_glasses, DefaultEntityMock.FEEDING_HABITS_RECORD.daily_water_glasses)
                assert.equal(result.six_month_breast_feeding, DefaultEntityMock.FEEDING_HABITS_RECORD.six_month_breast_feeding)
                assert
                    .deepEqual(result.food_allergy_intolerance, DefaultEntityMock.FEEDING_HABITS_RECORD.food_allergy_intolerance)
                assert.equal(result.breakfast_daily_frequency, DefaultEntityMock.FEEDING_HABITS_RECORD.breakfast_daily_frequency)
            })
        })
    })

    describe('toJSON()', () => {
        context('when the object contains all parameters set', () => {
            it('should return the object as JSON', () => {
                const activity = new FeedingHabitsRecord().fromJSON(DefaultEntityMock.FEEDING_HABITS_RECORD)
                const result = activity.toJSON()
                assert.equal(result.type, DefaultEntityMock.FEEDING_HABITS_RECORD.type)
                assert.equal(result.weekly_feeding_habits, DefaultEntityMock.FEEDING_HABITS_RECORD.weekly_feeding_habits)
                assert.equal(result.daily_water_glasses, DefaultEntityMock.FEEDING_HABITS_RECORD.daily_water_glasses)
                assert.equal(result.six_month_breast_feeding, DefaultEntityMock.FEEDING_HABITS_RECORD.six_month_breast_feeding)
                assert
                    .deepEqual(result.food_allergy_intolerance, DefaultEntityMock.FEEDING_HABITS_RECORD.food_allergy_intolerance)
                assert.equal(result.breakfast_daily_frequency, DefaultEntityMock.FEEDING_HABITS_RECORD.breakfast_daily_frequency)
            })
        })

        context('when some parameter is missing', () => {
            it('should return json without created_at', () => {
                const activity = new FeedingHabitsRecord().fromJSON({
                    patient_id: DefaultEntityMock.FEEDING_HABITS_RECORD.patient_id,
                    weekly_feeding_habits: DefaultEntityMock.FEEDING_HABITS_RECORD.weekly_feeding_habits,
                    daily_water_glasses: DefaultEntityMock.FEEDING_HABITS_RECORD.daily_water_glasses,
                    six_month_breast_feeding: DefaultEntityMock.FEEDING_HABITS_RECORD.six_month_breast_feeding,
                    food_allergy_intolerance: DefaultEntityMock.FEEDING_HABITS_RECORD.food_allergy_intolerance,
                    breakfast_daily_frequency: DefaultEntityMock.FEEDING_HABITS_RECORD.breakfast_daily_frequency
                })
                const result = activity.toJSON()
                assert.equal(result.created_at, undefined)
                assert.equal(result.type, DefaultEntityMock.FEEDING_HABITS_RECORD.type)
                assert.equal(result.weekly_feeding_habits, DefaultEntityMock.FEEDING_HABITS_RECORD.weekly_feeding_habits)
                assert.equal(result.daily_water_glasses, DefaultEntityMock.FEEDING_HABITS_RECORD.daily_water_glasses)
                assert.equal(result.six_month_breast_feeding, DefaultEntityMock.FEEDING_HABITS_RECORD.six_month_breast_feeding)
                assert
                    .deepEqual(result.food_allergy_intolerance, DefaultEntityMock.FEEDING_HABITS_RECORD.food_allergy_intolerance)
                assert.equal(result.breakfast_daily_frequency, DefaultEntityMock.FEEDING_HABITS_RECORD.breakfast_daily_frequency)
            })
        })
    })
})
