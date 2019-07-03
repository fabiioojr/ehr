import {UpdateQuestionnaireRecordValidator} from './update.questionnaire.record.validator'
import {NutritionalQuestionnaire} from '../model/nutritional.questionnaire'
import {ValidationException} from '../exception/validation.exception'
import {UpdateSleepHabitValidator} from './update.sleep.habit.validator'
import {UpdatePhysicalActivityHabitsValidator} from './update.physical.activity.habits.validator'
import {UpdateFeedingHabitsRecordValidator} from './update.feeding.habits.record.validator'
import {UpdateMedicalRecordValidator} from './update.medical.record.validator'

export class UpdateNutrtionalQuestionnaireValidator {

    public static validate(item: NutritionalQuestionnaire): void | ValidationException {
        UpdateQuestionnaireRecordValidator.validate(item)

        if (item.sleep_habit)
            UpdateSleepHabitValidator.validate(item.sleep_habit)
        if (item.physical_activity_habits)
            UpdatePhysicalActivityHabitsValidator.validate(item.physical_activity_habits)
        if (item.feeding_habits_record)
            UpdateFeedingHabitsRecordValidator.validate(item.feeding_habits_record)
        if (item.medical_record)
            UpdateMedicalRecordValidator.validate(item.medical_record)

    }
}
