import { call } from 'redux-saga/effects';
import appSagas, { } from './AppSagas'

export default function* rootSaga() {
    yield [
        ...appSagas,
    ]
}