import { isYoung } from "./helper/IsYoung";
import { Emberek } from "./types/Emberek";

const emberek: Array<Emberek> = [
  { id: 1, fname: "Nagy", lname: "Kornel", age: 18, sex: "male" },
  { id: 2, fname: "Gergely", lname: "Marcell", age: 18, sex: "male" },
  { id: 3, fname: "Abraham", lname: "Kristof", age: 16, sex: "male" },
  { id: 4, fname: "Marjanovic", lname: "Alex", age: 18, sex: "male" },
  { id: 5, fname: "Adok", lname: "Daniel", age: 17, sex: "male" },
];

const young: Array<Emberek> = emberek.filter((i: Emberek) => {
  isYoung(i);
});
console.log(young);
