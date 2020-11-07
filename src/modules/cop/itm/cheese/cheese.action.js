
import { cheeseService } from './cheese.service'

export const CheeseConstants = {
    REGISTER_REQUEST: 'CHEESES_REGISTER_REQUEST',
    REGISTER_SUCCESS: 'CHEESES_REGISTER_SUCCESS',
    REGISTER_FAILURE: 'CHEESES_REGISTER_FAILURE'
}

export const cheeseSuccesss = createAction(CheeseConstants,Cheese_Success);