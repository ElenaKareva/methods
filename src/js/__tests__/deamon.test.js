import Daemon from "../daemon";

test("instance of the class Daemon", () => {
  const daemon = new Daemon("Ivan");
  expect(daemon).toEqual({
    health: 100, 
    level: 1, 
    attack: 10, 
    defence: 40, 
    type: "Daemon", 
    name: "Ivan",
  });
});

test("levelUp for class", () => {
  const daemon = new Daemon("Ivan");
  daemon.levelUp();
  expect(daemon).toEqual({
    health: 100, 
    level: 2, 
    attack: 12, 
    defence: 48, 
    type: "Daemon", 
    name: "Ivan",
  });
});