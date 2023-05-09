import Bowerman from "../bowerman";

test("instance of the class Bowerman", () => {
  const bowerman = new Bowerman("Alex");
  expect(bowerman).toEqual({
    health: 100, 
    level: 1, 
    attack: 25, 
    defence: 25, 
    type: "Bowerman", 
    name: "Alex",
  });
});

test("levelUp for class", () => {
  const bowerman = new Bowerman("Alex");
  bowerman.levelUp();
  expect(bowerman).toEqual({
    health: 100, 
    level: 2, 
    attack: 30, 
    defence: 30, 
    type: "Bowerman", 
    name: "Alex",
  });
});


