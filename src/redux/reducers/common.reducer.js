export const ActionTypes = {
  QUIZ_BOX_SET_REGION: 'QUIZ_BOX_SET_REGION',
  QUIZ_BOX_SET_DIFFICULTY: 'QUIZ_BOX_SET_DIFFICULTY',
  QUIZ_BOX_SET_CATEGORY: 'QUIZ_BOX_SET_CATEGORY',
  QUIZ_BOX_SET_QUESTIONS: 'QUIZ_BOX_SET_QUESTIONS',
  QUIZ_BOX_SET_LOADER: 'QUIZ_BOX_SET_LOADER',
  QUIZ_BOX_SET_COMPLETED: 'QUIZ_BOX_SET_COMPLETED',
};

Object.freeze(ActionTypes);

export const actionCreators = {
  setRegion(payload) {
    return {
      type: ActionTypes.QUIZ_BOX_SET_REGION,
      payload: payload,
    };
  },
  setDifficulty(payload) {
    return {
      type: ActionTypes.QUIZ_BOX_SET_DIFFICULTY,
      payload: payload,
    };
  },
  setCategory(payload) {
    return {
      type: ActionTypes.QUIZ_BOX_SET_CATEGORY,
      payload: payload,
    };
  },
  setQuestions(payload) {
    return {
      type: ActionTypes.QUIZ_BOX_SET_QUESTIONS,
      payload: payload,
    };
  },
  setLoader(payload) {
    return {
      type: ActionTypes.QUIZ_BOX_SET_LOADER,
      payload: payload,
    };
  },
  setCompleted(payload) {
    return {
      type: ActionTypes.QUIZ_BOX_SET_COMPLETED,
      payload: payload,
    };
  },
};

export const getInitialCommonState = () => {
  return {
    isLoading: false,
    difficulty: 'easy',
    category: 'general_knowledge',
    limit: 5,
    region: {
      name: 'India',
      code: 'IN',
    },
    questions: [],
    completed: false,
  };
};

export default function commonReducer(state = getInitialCommonState(), action) {
  switch (action.type) {
    case ActionTypes.QUIZ_BOX_SET_REGION:
      return setRegion(state, action);
    case ActionTypes.QUIZ_BOX_SET_DIFFICULTY:
      return setDifficulty(state, action);
    case ActionTypes.QUIZ_BOX_SET_CATEGORY:
      return setCategory(state, action);
    case ActionTypes.QUIZ_BOX_SET_QUESTIONS:
      return setQuestions(state, action);
    case ActionTypes.QUIZ_BOX_SET_LOADER:
      return setLoader(state, action);
    case ActionTypes.QUIZ_BOX_SET_COMPLETED:
      return setCompleted(state, action);
    default:
      return state;
  }
}

const setRegion = (state, action) => {
  return {
    ...state,
    region: action.payload,
  };
};

const setDifficulty = (state, action) => {
  return {
    ...state,
    limit: action.payload.limit,
    difficulty: action.payload.value,
  };
};

const setCategory = (state, action) => {
  return {
    ...state,
    category: action.payload,
  };
};

const setQuestions = (state, action) => {
  return {
    ...state,
    questions: action.payload,
    completed: false,
  };
};

const setLoader = (state, action) => {
  return {
    ...state,
    isLoading: action.payload,
  };
};

const setCompleted = (state, action) => {
  return {
    ...state,
    completed: action.payload,
  };
};
