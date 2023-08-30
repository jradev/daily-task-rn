import {
  ADD_TASK,
  VIEW_TASK,
  DONE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
} from '@app-redux/action';
import {STATUS} from '@utils/constant';

const initialState = {
  tasks: [],
  task: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const {id, task} = action.payload;
      return {
        ...state,
        tasks: [...state.tasks, {id, task}],
      };
    }
    case UPDATE_TASK: {
      const {id, task} = action.payload;
      return {
        ...state,
        tasks: state?.tasks?.map(i => {
          if (i?.id === id) {
            return {
              id: i?.id,
              task: task,
            };
          }
          return i;
        }),
      };
    }
    case VIEW_TASK: {
      const {id} = action.payload;
      return {
        ...state,
        task: state?.tasks?.filter(i => i?.id === id)[0],
      };
    }
    case DONE_TASK: {
      const {id} = action.payload;
      return {
        ...state,
        tasks: state?.tasks?.map(i => {
          if (i?.id === id) {
            return {
              id: i?.id,
              task: {
                ...i?.task,
                status: STATUS.done,
              },
            };
          }
          return i;
        }),
        task: {
          ...state?.task,
          task: {
            ...state?.task?.task,
            status: STATUS.done,
          },
        },
      };
    }
    case DELETE_TASK: {
      const {id} = action.payload;
      return {
        ...state,
        tasks: state?.tasks?.filter(i => i?.id !== id),
      };
    }
    default:
      return state;
  }
};

export default appReducer;
