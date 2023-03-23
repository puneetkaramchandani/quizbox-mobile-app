import {dispatch} from '../redux/store';
import {actionCreators} from '../redux/reducers/common.reducer';
import {httpRequest} from '../utils/httpRequest';
import {APIS} from '../utils/apis';

export function setRegion(payload) {
  try {
    dispatch(actionCreators.setRegion(payload));
  } catch (e) {
    console.log(e);
  }
}

export function setDifficulty(payload) {
  try {
    dispatch(actionCreators.setDifficulty(payload));
  } catch (e) {
    console.log(e);
  }
}

export function setCategory(payload) {
  try {
    dispatch(actionCreators.setCategory(payload));
  } catch (e) {
    console.log(e);
  }
}

export function loadQuestions(payload) {
  const {region, category, difficulty, limit} = payload;
  let url = `${APIS.getQuestions}?region=${region}&category=${category}&difficulty=${difficulty}&limit=${limit}`;
  dispatch(actionCreators.setLoader(true));
  httpRequest({
    url,
    method: 'GET',
  })
    .then(async res => {
      if (res.ok) {
        const data = await res.json();
        await dispatch(actionCreators.setQuestions(data));
      } else {
        console.log(res);
      }
    })
    .catch(e => console.log(e))
    .finally(() => {
      dispatch(actionCreators.setLoader(false));
    });
}

export function clearQuestions() {
  try {
    dispatch(actionCreators.setQuestions([]));
  } catch (e) {
    console.log(e);
  }
}

export function setCompleted(payload) {
  try {
    dispatch(actionCreators.setCompleted(payload));
  } catch (e) {
    console.log(e);
  }
}
