import _ from 'lodash';
import moment from 'moment';
import { put } from 'redux-saga/effects';
import { setAvailability } from '../../actions';

export default function* handleCreateAvailability({ payload: provider }) {
  const providerAvailability = _.map(
    provider?.availability,
    (entry) => ({ start: moment(entry?.start), end: moment(entry?.end), name: provider?.name }),
  );
  yield put(setAvailability(providerAvailability));
}
