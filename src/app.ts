import { isYoung } from "./helper/IsYoung";
import { Ember } from "./types/Emberek";

const emberek: Array<Ember> = [
  { id: 1, fname: "Nagy", lname: "Kornel", age: 18, sex: "male" },
  { id: 2, fname: "Gergely", lname: "Marcell", age: 18, sex: "male" },
  { id: 3, fname: "Abraham", lname: "Kristof", age: 16, sex: "male" },
  { id: 4, fname: "Marjanovic", lname: "Alex", age: 18, sex: "male" },
  { id: 5, fname: "Adok", lname: "Daniel", age: 17, sex: "male" },
];

const young: Array<Ember> = emberek.filter((i: Ember) => {
  return isYoung(i);
});
console.log(young);
