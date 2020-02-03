import { all, fork, takeLatest, call, put } from "redux-saga/effects";
import { FIND_NEW_SPECIAL_LIST_REQUEST, FIND_NEW_SPECIAL_LIST_SUCCESS, FIND_NEW_SPECIAL_LIST_FAILURE } from '../reducers/book';

function findBookListAPI() {
  console.log('test')
}
function* findBookList(action: any) {
  try {
    console.log(action)
    yield call(findBookListAPI);
    yield put({
      type: FIND_NEW_SPECIAL_LIST_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: FIND_NEW_SPECIAL_LIST_FAILURE
    });
  }
}

function* watchFindBookList() {
  yield takeLatest(FIND_NEW_SPECIAL_LIST_REQUEST, findBookList)
}

export default function* bookSaga() {
  yield all([
    fork(watchFindBookList),
  ]);
}