import Mongoose, { Schema } from 'mongoose'

interface IFamilyCohesionRecordModel extends Mongoose.Document {
}

const familyCohesionRecordSchema = new Mongoose.Schema({
        patient_id: {
            type: Schema.Types.ObjectId,
            ref: 'Patient',
            required: 'Id of patient associated with the family cohesion record is required!'
        },
        created_at: {
            type: Date
        },
        type: {
            type: String
        },
        family_mutual_aid_freq: {
            type: String,
            required: 'Frequency of family mutual aid from patient is required!'
        },
        friendship_approval_freq: {
            type: String,
            required: 'Frequency of friendship approval from patient is required!'
        },
        family_only_task_freq: {
            type: String,
            required: 'Frequency of family only task from patient is required!'
        },
        family_only_preference_freq: {
            type: String,
            required: 'Frequency of family only preference from patient is required!'
        },
        free_time_together_freq: {
            type: String,
            required: 'Frequency of patient free time together with family is required!'
        },
        family_proximity_perception_freq: {
            type: String,
            required: 'Frequency of family proximity perception from patient is required!'
        },
        all_family_tasks_freq: {
            type: String,
            required: 'Frequency of all family tasks from patient is required!'
        },
        family_tasks_opportunity_freq: {
            type: String,
            required: 'Frequency of family tasks opportunity from patient is required!'
        },
        family_decision_support_freq: {
            type: String,
            required: 'Frequency of family decision support from patient is required!'
        },
        family_union_relevance_freq: {
            type: String,
            required: 'Frequency of family union relevance from patient is required!'
        },
        family_cohesion_result: {
            type: Number,
            required: 'Frequency sum of family cohesion result from patient is required!'
        }
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: false },
        toJSON: {
            transform: (doc, ret) => {
                ret.id = ret._id
                delete ret._id
                delete ret.__v
                return ret
            }
        }
    })

export const FamilyCohesionRecordRepoModel =
    Mongoose.model <IFamilyCohesionRecordModel>
    ('FamilyCohesionRecord', familyCohesionRecordSchema, 'questionnaires')
