import { configureStore } from '@reduxjs/toolkit';
import calculadoraReducer from './calculadora/calculadoraSlice';

export default configureStore({
  reducer: {
    inputCalc: calculadoraReducer,
  },
});
