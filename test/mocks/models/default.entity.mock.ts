import { ChronicDiseaseTypes } from '../../../src/application/domain/utils/chronic.disease.types'
import { DiseaseHistoryTypes } from '../../../src/application/domain/utils/disease.history.types'
import { QuestionnaireTypes } from '../../../src/application/domain/utils/questionnaire.types'
import { SevenDaysFeedingFrequencyTypes } from '../../../src/application/domain/utils/seven.days.feeding.frequency.types'
import { DailyFeedingFrequencyTypes } from '../../../src/application/domain/utils/daily.feeding.frequency.types'
import { OneDayFeedingAmountTypes } from '../../../src/application/domain/utils/one.day.feeding.amount.types'
import { BreastFeedingTypes } from '../../../src/application/domain/utils/breast.feeding.types'
import { FoodAllergyIntoleranceTypes } from '../../../src/application/domain/utils/food.allergy.intolerance.types'
import { SchoolActivityFrequencyTypes } from '../../../src/application/domain/utils/school.activity.frequency.types'
import { ScholarityLevelTypes } from '../../../src/application/domain/utils/scholarity.level.types'
import { FoodTypes } from '../../../src/application/domain/utils/food.types'

export abstract class DefaultEntityMock {
    public static readonly ACTIVITY_HABITS_RECORD: any = {
        id: '5ca23b9af2bb205b0262556b',
        patient_id: '5ca23b9af04e7c28223cb590',
        created_at: '2018-01-03T00:01:04.000Z'
    }

    public static readonly FEEDING_HABITS_RECORD: any = {
        id: '5ca23b9a4c0ed58781c8ee3f',
        patient_id: '5ca23b9af04e7c28223cb590',
        created_at: '2018-01-03T00:01:04.000Z',
        type: QuestionnaireTypes.FEEDING_HABITS_RECORD,
        weekly_feeding_habits: [{
            food: FoodTypes.BURGER_SAUSAGE,
            seven_days_freq: SevenDaysFeedingFrequencyTypes.ALL_DAYS
        }],
        daily_water_glasses: OneDayFeedingAmountTypes.FIVE_MORE,
        six_month_breast_feeding: BreastFeedingTypes.COMPLEMENTARY,
        food_allergy_intolerance: [FoodAllergyIntoleranceTypes.EGG, FoodAllergyIntoleranceTypes.OTHER],
        breakfast_daily_frequency: DailyFeedingFrequencyTypes.ALMOST_EVERYDAY

    }

    public static readonly MEDICAL_RECORD: any = {
        id: '5ca23b9ac442321a589285b0',
        patient_id: '5ca23b9af04e7c28223cb590',
        created_at: '2018-01-03T00:01:04.000Z',
        type: QuestionnaireTypes.MEDICAL_RECORD,
        chronic_diseases: [{
            type: ChronicDiseaseTypes.BLOOD_FAT,
            disease_history: DiseaseHistoryTypes.YES
        }]
    }

    public static readonly PHYSICAL_ACTIVITY_HABITS: any = {
        id: '5ca23b9adcd6cc4649189c4a',
        patient_id: '5ca23b9af04e7c28223cb590',
        created_at: '2018-01-03T00:01:04.000Z',
        type: QuestionnaireTypes.PHYSICAL_ACTIVITY_HABITS,
        school_activity_freq: SchoolActivityFrequencyTypes.FOUR_MORE_PER_WEEK,
        weekly_activities: ['run', 'swin']
    }

    public static readonly SLEEP_HABIT: any = {
        id: '5ca23b9ac6c20c399e333f46',
        patient_id: '5ca23b9af04e7c28223cb590',
        created_at: '2018-01-03T00:01:04.000Z',
        type: QuestionnaireTypes.SLEEP_HABIT,
        week_day_sleep: 22,
        week_day_wake_up: 6
    }

    public static readonly CHRONIC_DISEASE: any = {
        type: ChronicDiseaseTypes.BLOOD_FAT,
        disease_history: DiseaseHistoryTypes.YES
    }

    public static readonly WEEKLY_FOOD_RECORD: any = {
        food: FoodTypes.BURGER_SAUSAGE,
        seven_days_freq: SevenDaysFeedingFrequencyTypes.ALL_DAYS
    }

    public static readonly SOCIODEMOGRAPHIC_RECORD: any = {
        id: '5ca23b9adcd6cc4649189c4c',
        patient_id: '5ca23b9af04e7c28223cb590',
        created_at: '2018-01-03T00:01:04.000Z',
        type: QuestionnaireTypes.SOCIODEMOGRAPHIC_RECORD,
        color_race: 'white',
        mother_scholarity: ScholarityLevelTypes.UNLETTERED_ELEMENTARY_ONE_INCOMPLETE,
        people_in_home: 4
    }

    public static readonly FAMILY_COHESION_RECORD: any = {
        id: '5ca23b9adcd6cc4649189c3b',
        patient_id: '5ca23b9af04e7c28223cb590',
        created_at: '2018-01-03T00:01:04.000Z',
        type: QuestionnaireTypes.FAMILY_COHESION_RECORD,
        family_mutual_aid_freq: 'almost_never',
        friendship_approval_freq: 'almost_never',
        family_only_task_freq: 'almost_never',
        family_only_preference_freq: 'almost_never',
        free_time_together_freq: 'almost_never',
        family_proximity_perception_freq: 'almost_never',
        all_family_tasks_freq: 'almost_never',
        family_tasks_opportunity_freq: 'almost_never',
        family_decision_support_freq: 'almost_never',
        family_union_relevance_freq: 'almost_never',
        family_cohesion_result: 45
    }

    public static readonly ORAL_HEALTH_RECORD: any = {
        id: '5ca23b9adcd6cc4649189c3b',
        patient_id: '5ca23b9af04e7c28223cb590',
        created_at: '2018-01-03T00:01:04.000Z',
        teeth_brushing_freq: 'none',
        type: QuestionnaireTypes.ORAL_HEALTH_RECORD,
        teeth_lesions: [
            {
                tooth_type: 'deciduous_tooth',
                lesion_type: 'white_spot_lesion'
            },
            {
                tooth_type: 'deciduous_tooth',
                lesion_type: 'cavitated_lesion'
            }
        ]
    }
}
