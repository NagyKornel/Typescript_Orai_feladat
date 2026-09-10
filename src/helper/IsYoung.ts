import { Ember } from "../types/Emberek";

export const isYoung = (e: Ember): boolean => {
  return e.age < 18;
};
