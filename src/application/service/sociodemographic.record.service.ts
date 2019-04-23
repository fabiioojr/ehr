import { ISociodemographicRecordService } from '../port/sociodemographic.record.service.interface'
import { IQuery } from '../port/query.interface'
import { SociodemographicRecord } from '../domain/model/sociodemographic.record'
import { inject, injectable } from 'inversify'
import { Identifier } from '../../di/identifiers'
import { ISociodemographicRecordRepository } from '../port/sociodemographic.record.repository.interface'
import { QuestionnaireTypes } from '../domain/utils/questionnaire.types'
import { IPatientRepository } from '../port/patient.repository.interface'
import { ObjectIdValidator } from '../domain/validator/object.id.validator'
import { ValidationException } from '../domain/exception/validation.exception'
import { Strings } from '../../utils/strings'
import { CreateSociodemographicRecordValidator } from '../domain/validator/create.sociodemographic.record.validator'
import { UpdateSociodemographicRecordValidator } from '../domain/validator/update.sociodemographic.record.validator'

@injectable()
export class SociodemographicRecordService implements ISociodemographicRecordService {
    constructor(
        @inject(Identifier.SOCIODEMOGRAPHIC_RECORD_REPOSITORY) private readonly _repo: ISociodemographicRecordRepository,
        @inject(Identifier.PATIENT_REPOSITORY) private readonly _patientRepo: IPatientRepository
    ) {
    }

    public async add(item: SociodemographicRecord): Promise<SociodemographicRecord> {
        try {
            CreateSociodemographicRecordValidator.validate(item)
            if (item.patient_id) {
                const patientExists = await this._patientRepo.checkExists(item.patient_id)
                if (!patientExists) {
                    throw new ValidationException(
                        Strings.PATIENT.NOT_FOUND,
                        Strings.PATIENT.NOT_FOUND_DESCRIPTION
                    )
                }
            }
        } catch (err) {
            return Promise.reject(err)
        }
        return this._repo.create(item)
    }

    public async getAll(query: IQuery): Promise<Array<SociodemographicRecord>> {
        try {
            ObjectIdValidator.validate(query.toJSON().filters.patient_id)
        } catch (err) {
            return Promise.reject(err)
        }
        query.addFilter({ type: QuestionnaireTypes.SOCIODEMOGRAPHIC_RECORD })
        return this._repo.find(query)
    }

    public async getById(id: string, query: IQuery): Promise<SociodemographicRecord> {
        try {
            ObjectIdValidator.validate(id)
            ObjectIdValidator.validate(query.toJSON().filters.patient_id)
        } catch (err) {
            return Promise.reject(err)
        }
        query.addFilter({ _id: id, type: QuestionnaireTypes.SOCIODEMOGRAPHIC_RECORD })
        return this._repo.findOne(query)
    }

    public async update(item: SociodemographicRecord): Promise<SociodemographicRecord> {
        try {
            ObjectIdValidator.validate(item.patient_id!)
            item.patient_id = undefined
            UpdateSociodemographicRecordValidator.validate(item)
        } catch (err) {
            return Promise.reject(err)
        }
        return this._repo.update(item)
    }

    public async removeSociodemographicRecord(patientId, socioId: string): Promise<boolean> {
        try {
            ObjectIdValidator.validate(patientId)
            ObjectIdValidator.validate(socioId)
        } catch (err) {
            return Promise.reject(err)
        }
        return this._repo.delete(socioId)
    }

    public remove(id: string): Promise<boolean> {
        throw Error('Not implemented yet!')
    }
}
