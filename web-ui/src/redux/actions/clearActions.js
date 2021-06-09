import { CLEAR_REQUEST } from "./actionTypes";

export const clear = (namedType) => ({
  type: `${CLEAR_REQUEST}_${namedType}`,
});
