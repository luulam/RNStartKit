
import { delay } from 'redux-saga'
import { AppCreators, AppTypes } from '../redux/AppRedux'
import { put, takeEvery, call } from 'redux-saga/effects'
import uuidV4 from 'uuid/v4';

function* showNotify({ title }) {
    let id = uuidV4();
    yield put(AppCreators.addNotify(id, title));
    yield call(delay, 1000)
    yield put(AppCreators.removeNotify(id));
}

export function* watchShowNotify() {
    yield takeEvery(AppTypes.PUT_NOTIFY, showNotify);
}

export default [
    watchShowNotify()
]