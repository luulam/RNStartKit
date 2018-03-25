
import { delay } from 'redux-saga'
import { AppCreators, AppTypes } from '../Redux/AppRedux'
import { put, takeEvery, call } from 'redux-saga/effects'
import uuidV4 from 'uuid/v4';

function* putNotify({ title }) {
    let id = uuidV4();
    yield put(AppCreators.addNotify(id, title));
    yield call(delay, 1000)
    yield put(AppCreators.removeNotify(id));
}

export function* watchShowNotify() {
    yield takeEvery(AppTypes.PUT_NOTIFY, putNotify);
}

export default [
    watchShowNotify()
]