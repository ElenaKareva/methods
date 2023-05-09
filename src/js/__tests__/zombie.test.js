import Zombie from "../zombie";

test("instance of the class Zombie", () => {
  const zombie = new Zombie("Alex");
  expect(zombie).toEqual({
    health: 100, 
    level: 1, 
    attack: 40, 
    defence: 10, 
    type: "Zombie", 
    name: "Alex",
  });
});

test("levelUp for class", () => {
  const zombie = new Zombie("Alex");
  zombie.levelUp();
  expect(zombie).toEqual({
    health: 100, 
    level: 2, 
    attack: 48, 
    defence: 12, 
    type: "Zombie", 
    name: "Alex",
  });
});