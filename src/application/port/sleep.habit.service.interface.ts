import { IService } from './service.interface'
import { SleepHabit } from '../domain/model/sleep.habit'

export interface ISleepHabitService extends IService<SleepHabit> {
}