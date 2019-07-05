import {controller, httpDelete, httpGet, httpPost, request, response} from 'inversify-express-utils'
import {inject} from 'inversify'
import {Identifier} from '../../di/identifiers'
import HttpStatus from 'http-status-codes'
import {Request, Response} from 'express'
import {Query} from '../../infrastructure/repository/query/query'
import {ApiExceptionManager} from '../exception/api.exception.manager'
import {INutritionalQuestionnaireService} from '../../application/port/nutritional.questionnaire.service'
import {ApiException} from '../exception/api.exception'
import {Strings} from '../../utils/strings'
import {NutritionalQuestionnaire} from '../../application/domain/model/nutritional.questionnaire'

@controller('/patients/:patient_id/nutritional/questionnaires')
export class NutritionalQuestionnaireController {
    constructor(
        @inject(Identifier.NUTRITIONAL_QUESTIONNAIRE_SERVICE) private readonly _service: INutritionalQuestionnaireService
    ) {
    }

    @httpPost('/')
    public async addNutritionalQuestionnaireFromPatient(@request() req: Request, @response() res: Response): Promise<Response> {
        try {
            const nutritionalQuestionnaire: NutritionalQuestionnaire = new NutritionalQuestionnaire().fromJSON(req.body)
            nutritionalQuestionnaire.patient_id = req.params.patient_id
            const result: NutritionalQuestionnaire = await this._service.add(nutritionalQuestionnaire)
            return res.status(HttpStatus.CREATED).send(this.toJSONView(result))
        } catch (err) {
            const handleError = ApiExceptionManager.build(err)
            return res.status(handleError.code).send(handleError.toJson())
        }
    }

    @httpGet('/')
    public async getAllNutritionalQuestionnaireFromPatient(@request() req: Request, @response() res: Response): Promise<Response>{
        try {
            const query: Query = new Query().fromJSON(req.query)
            query.addFilter({patient_id: req.params.patient_id})
            const result: Array<NutritionalQuestionnaire> = await this._service.getAll(query)
            return res.status(HttpStatus.OK).send(this.toJSONView(result))
        }catch (err) {
            const handleError = ApiExceptionManager.build(err)
            return res.status(handleError.code).send(handleError.toJson())
        }
    }
    @httpGet('/:questionnaire_id')
    public async getNutritionalQuestionnaireFromPatient(@request() req: Request, @response() res: Response): Promise<Response>{
        try {
            const query: Query = new Query().fromJSON(req.query)
            query.addFilter({patient_id: req.params.patient_id})
            const result: NutritionalQuestionnaire = await this._service.getById(req.params.questionnaire_id, query)

            if (!result) return res.status(HttpStatus.NOT_FOUND).send(this.getMessageNotFound())
            return res.status(HttpStatus.OK).send(this.toJSONView(result))
        }
        catch (err) {
            const handleError = ApiExceptionManager.build(err)
            return res.status(handleError.code).send(handleError.toJson())
        }
    }

    @httpGet('/Last')
    public async getLastNutritionalQuestionnaireFromPatient(
        @request() req: Request, @response() res: Response): Promise<Response> {
        try {
            const query: Query = new Query().fromJSON(req.query)
            query.addFilter({ patient_id: req.params.patient_id })
            query.addOrdination('created_at', 'desc')

            const nutritionalQuestionnaire: Array<NutritionalQuestionnaire> = await this._service.getAll(query)
            const result: any = this.toJSONView(nutritionalQuestionnaire[0])

            return res.status(HttpStatus.OK).send(result)
        } catch (err) {
            const handleError = ApiExceptionManager.build(err)
            return res.status(handleError.code).send(handleError.toJson())
        }
    }

    @httpDelete('/:questionnaire_id')
    public async deleteNutritionalFromPatient(@request() req: Request, @response() res: Response): Promise<Response> {
        try {
            await this._service.removeNutrionalQuestionnaire(req.params.patient_id, req.params.questionnaire_id)
            return res.status(HttpStatus.NO_CONTENT).send()
        } catch (err) {
            const handleError = ApiExceptionManager.build(err)
            return res.status(handleError.code).send(handleError.toJson())
        }
    }

    private toJSONView(item: any): any {
        if (!item) return {}
        delete item.type
        return item.toJSON()
    }

    private getMessageNotFound(): object {
        return new ApiException(
            HttpStatus.NOT_FOUND,
            Strings.ODONTOLOGICAL_QUESTIONNAIRE.NOT_FOUND,
            Strings.ODONTOLOGICAL_QUESTIONNAIRE.NOT_FOUND_DESCRIPTION
        ).toJson()
    }
}
