import * as ui from './ui-actions';

export interface State {
  title: string;
}

export const initialState: State = {
  title: ''
};

export function reducer(state = initialState, action: ui.Actions): State {
  switch (action.type) {
    case ui.SET_TITLE: {
      return { ...state, title: action.payload }
    }
    default: {
      return state;
    }
  }
}

export const getTitle = (state: State) => state.title;
