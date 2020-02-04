import { all, call } from 'redux-saga/effects';
import book from './book';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function* rootSaga(): any {
  yield all([call(book)]);
}
