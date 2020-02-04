import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import {
  FIND_NEW_SPECIAL_LIST_REQUEST,
  FIND_NEW_SPECIAL_LIST_SUCCESS,
  FIND_NEW_SPECIAL_LIST_FAILURE,
} from '../reducers/book';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function findBookListAPI(): any {
  console.log('test');
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* findBookList(action: any): any {
  try {
    console.log(action);
    yield call(findBookListAPI);
    yield put({
      type: FIND_NEW_SPECIAL_LIST_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: FIND_NEW_SPECIAL_LIST_FAILURE,
    });
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* watchFindBookList(): any {
  yield takeLatest(FIND_NEW_SPECIAL_LIST_REQUEST, findBookList);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function* bookSaga(): any {
  yield all([fork(watchFindBookList)]);
}
