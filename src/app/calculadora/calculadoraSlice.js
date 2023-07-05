import { createSlice } from '@reduxjs/toolkit';

const INIT_STATE = {
  valorActual: '0',
  valorPrevio: '0',
  formula: '',
  evaluate: false,
};

export const calculadoraSlice = createSlice({
  name: 'inputCalc',
  initialState: INIT_STATE,
  reducers: {
    updateInput: (state, action) => {
      console.log(action.payload);
      return { ...state, ...action.payload };
    },
    updateInputInitial: (state, action) => {
      return { ...INIT_STATE, ...action.payload };
    },
    clearInput: (state) => {
      return { ...state, ...INIT_STATE };
    },
  },
});

export const { updateInput, updateInputInitial, clearInput } =
  calculadoraSlice.actions;
export default calculadoraSlice.reducer;
