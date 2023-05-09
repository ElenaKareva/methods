import Character from "../character";
import Daemon from "../daemon";

test("instance of the class Character", () => {
  const daemon = new Daemon("Ivan", "Daemon");
  expect(daemon).toEqual({
    health: 100, 
    level: 1, 
    attack: 10, 
    defence: 40,
    type: "Daemon", 
    name: "Ivan",
  });
});



test("throws on name", () => {
  expect(() => new Character("A", "Daemon")).toThrow("Имя должно содержать от 2 до 10 символов!");
  expect(() => new Character("Qweasdzxcvb", "Daemon")).toThrow("Имя должно содержать от 2 до 10 символов!");
});

test("throws on type", () => {
  expect(() => new Character("Ivan", "Prist")).toThrow("Неверный тип!");
});

test("error health", () => {
  const daemon = new Character("Ivan", "Daemon");
  daemon.health = 0;
  expect(() => daemon.levelUp()).toThrow("Нельзя повысить левел умершего!");
});

test("damage in case health = 100", () => {
  const daemon = new Daemon("Ivan", "Daemon");
  daemon.health = 100;
  daemon.damage(10);
  const expectedHealth = 94;
  expect(daemon.health).toEqual(expectedHealth);
});

test("damage in case health = 0", () => {
  expect(() => {
  const daemon = new Character("Ivan", "Daemon");
  daemon.health = -1;
  daemon.damage(25);
  }).toThrow("Нельзя понизить здоровье умершего");
});

