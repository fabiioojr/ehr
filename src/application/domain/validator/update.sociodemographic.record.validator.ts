import { ValidationException } from '../exception/validation.exception'
import { SociodemographicRecord } from '../model/sociodemographic.record'
import { ColorRaceTypesValidator } from './color.race.types.validator'
import { ScholarityLevelTypesValidator } from './scholarity.level.types.validator'
import { UpdateQuestionnaireRecordValidator } from './update.questionnaire.record.validator'

export class UpdateSociodemographicRecordValidator {
    public static validate(item: SociodemographicRecord): void | ValidationException {
        UpdateQuestionnaireRecordValidator.validate(item)
        if (item.color_race) ColorRaceTypesValidator.validate(item.color_race)
        if (item.mother_scholarity) ScholarityLevelTypesValidator.validate(item.mother_scholarity)
    }
}
