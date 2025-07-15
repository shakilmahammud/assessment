import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  trips: [],
};

const tripSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    addTrip: (state, action) => {
      state.trips.push(action.payload);
    },
    removeTrip: (state, action) => {
      state.trips = state.trips.filter(t => t.id !== action.payload);
    },
    setTrips: (state, action) => {
      state.trips = action.payload;
    },
  },
});

export const { addTrip, removeTrip, setTrips } = tripSlice.actions;
export default tripSlice.reducer;
