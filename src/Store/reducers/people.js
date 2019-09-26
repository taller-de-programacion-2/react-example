import {
  GET_PEOPLE,
  GET_PEOPLE_SUCCESS
} from "../actions";

let initialState = [];

const people = (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE: {
      return []
    }
    case GET_PEOPLE_SUCCESS: {
      const people = action.payload;
      return people;
    }
    default:
      return state
  }
}

export default people;