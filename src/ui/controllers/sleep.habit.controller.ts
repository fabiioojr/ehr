import HttpStatus from 'http-status-codes'
import { controller, httpDelete, httpGet, httpPatch, httpPost, request, response } from 'inversify-express-utils'
import { inject } from 'inversify'
import { Identifier } from '../../di/identifiers'
import { ISleepHabitService } from '../../application/port/sleep.habit.service.interface'
import { Request, Response } from 'express'
import { ApiExceptionManager } from '../exception/api.exception.manager'
import { SleepHabit } from '../../application/domain/model/sleep.habit'
import { ApiException } from '../exception/api.exception'
import { Strings } from '../../utils/strings'
import { Query } from '../../infrastructure/repository/query/query'

@controller('/patients/:patient_id/sleephabits')
export class SleepHabitController {
    constructor(
        @inject(Identifier.SLEEP_HABIT_SERVICE) private readonly _service: ISleepHabitService
    ) {
    }

    @httpPost('/')
    public async addSleepHabitFromPatient(@request() req: Request, @response() res: Response): Promise<Response> {
        try {
            const sleepHabit: SleepHabit = new SleepHabit().fromJSON(req.body)
            sleepHabit.patient_id = req.params.patient_id
            const result: SleepHabit = await this._service.add(sleepHabit)
            return res.status(HttpStatus.CREATED).send(this.toJSONView(result))
        } catch (err) {
            const handleError = ApiExceptionManager.build(err)
            return res.status(handleError.code).send(handleError.toJson())
        }
    }

    @httpGet('/')
    public async getAllSleepHabitsFromPatient(@request() req: Request, @response() res: Response): Promise<Response> {
        try {
            const query: Query = new Query().fromJSON(req.query)
            query.addFilter({ patient_id: req.params.patient_id })
            const result: Array<SleepHabit> = await this._service.getAll(query)
            return res.status(HttpStatus.OK).send(this.toJSONView(result))
        } catch (err) {
            const handleError = ApiExceptionManager.build(err)
            return res.status(handleError.code).send(handleError.toJson())
        }
    }

    @httpGet('/:sleephabit_id')
    public async getSleepDataFromPatient(@request() req: Request, @response() res: Response): Promise<Response> {
        try {
            const query: Query = new Query().fromJSON(req.query)
            query.addFilter({ patient_id: req.params.patient_id })
            const result: SleepHabit =
                await this._service.getById(req.params.sleephabit_id, query)
            if (!result) return res.status(HttpStatus.NOT_FOUND).send(this.getMessageNotFound())
            return res.status(HttpStatus.OK).send(this.toJSONView(result))
        } catch (err) {
            const handleError = ApiExceptionManager.build(err)
            return res.status(handleError.code).send(handleError.toJson())
        }
    }

    @httpPatch('/:sleephabit_id')
    public async updateSleepHabitFromPatient(@request() req: Request, @response() res: Response): Promise<Response> {
        try {
            const sleepHabit: SleepHabit = new SleepHabit().fromJSON(req.body)
            sleepHabit.id = req.params.sleephabit_id
            sleepHabit.patient_id = req.params.patient_id
            const result: SleepHabit = await this._service.update(sleepHabit)
            if (!result) return res.status(HttpStatus.NOT_FOUND).send(this.getMessageNotFound())
            return res.status(HttpStatus.OK).send(this.toJSONView(result))
        } catch (err) {
            const handleError = ApiExceptionManager.build(err)
            return res.status(handleError.code).send(handleError.toJson())
        }
    }

    @httpDelete('/:sleephabit_id')
    public async deleteSleepHabitFromPatient(@request() req: Request, @response() res: Response): Promise<Response> {
        try {
            await this._service.removeSleepHabit(req.params.patient_id, req.params.sleephabit_id)
            return res.status(HttpStatus.NO_CONTENT).send()
        } catch (err) {
            const handleError = ApiExceptionManager.build(err)
            return res.status(handleError.code).send(handleError.toJson())
        }
    }

    private toJSONView(item: SleepHabit | Array<SleepHabit>): object {
        if (item instanceof Array) {
            return item.map(value => {
                value.type = undefined
                return value.toJSON()
            })
        }

        item.type = undefined
        return item.toJSON()
    }

    private getMessageNotFound(): object {
        return new ApiException(
            HttpStatus.NOT_FOUND,
            Strings.SLEEP_HABIT.NOT_FOUND,
            Strings.SLEEP_HABIT.NOT_FOUND_DESCRIPTION
        ).toJson()
    }
}
