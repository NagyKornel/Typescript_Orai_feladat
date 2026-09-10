import { Emberek } from "../types/Emberek";

export const isYoung = (e: Emberek): boolean => {
  return e.age < 18;
};
