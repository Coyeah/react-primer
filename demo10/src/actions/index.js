// index.js
import { NUM_CHANGE_ADD, NUM_CHANGE_SUB } from '../constants/actionTypes';

export function addNumber() {
  return {
    type: NUM_CHANGE_ADD,
  }
}

export function subNumber() {
  return {
    type: NUM_CHANGE_SUB,
  }
}