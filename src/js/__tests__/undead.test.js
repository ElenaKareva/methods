import Undead from "../undead";

test("instance of the class Undead", () => {
  const undead = new Undead("Alex");
  expect(undead).toEqual({
    health: 100, 
    level: 1, 
    attack: 25, 
    defence: 25, 
    type: "Undead", 
    name: "Alex",
  });
});

test("levelUp for class", () => {
  const undead = new Undead("Alex");
  undead.levelUp();
  expect(undead).toEqual({
    health: 100, 
    level: 2, 
    attack: 30, 
    defence: 30, 
    type: "Undead", 
    name: "Alex",
  });
});