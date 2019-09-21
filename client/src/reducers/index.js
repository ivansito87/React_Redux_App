import {
  TOGGLE_DIALOG,
  SELECT_APPOINTMENT,
  UPDATE_APPOINTMENT,
  UPDATE_FORM
} from '../actions/actionTypes';

// just using 1 reducer since so few things to keep track of..
export default function rootReducer(state = getInitialState(), action) {
  switch (action.type) {
    case TOGGLE_DIALOG:
      let newState = {
        ...state,
        open: !state.open
      }
      localStorage.setItem('data', JSON.stringify(newState));
      return newState

    case SELECT_APPOINTMENT:
      return {
        ...state,
        selectedAppointment: action.payload
      }      
    case UPDATE_FORM:
      return {
        ...state,
        selectedAppointment: action.payload
      };

    case UPDATE_APPOINTMENT:
      return {
        ...state,
        appointmentData: action.payload.appointmentData
      }

    default:
      return state;
  }
}

const getInitialState = () => {
  var localData = JSON.parse(localStorage.getItem('data'));
  if (localData) {
    return localData
  } else {
    return initialState
  }
}

const initialState = {
  appointmentData: [{
      time: "9:00am",
      name: "Ivan",
      phone: 7706887959,
      available: false,
      last_name: "Rendon"
    },
    {
      time: "10:00am",
      name: '',
      phone: '',
      available: true,
      last_name: ''
    },
    {
      time: "11:00am",
      name: '',
      phone: '',
      available: true,
      last_name: ''
    },
    {
      time: "12:00pm",
      name: '',
      phone: '',
      available: true,
      last_name: ''
    },
    {
      time: "1:00pm",
      name: '',
      phone: '',
      available: true,
      last_name: ''
    },
    {
      time: "2:00pm",
      name: '',
      phone: '',
      available: true,
      last_name: ''
    },
    {
      time: "3:00pm",
      name: '',
      phone: '',
      available: true,
      last_name: ''
    },
    {
      time: "4:00pm",
      name: '',
      phone: '',
      available: true,
      last_name: ''
    },
  ],
  open: false,
  selectedAppointment: {
    time: '',
    name: '',
    phone: '',
    available: true,
    last_name: ''
  }
};