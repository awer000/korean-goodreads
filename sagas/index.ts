import { all, call } from "redux-saga/effects";
import book from './book'


export default function* rootSaga() {
  yield all([call(book)]);
}
