export default class Character {
    constructor(name, type) {
      const types = [
          "Bowerman", 
          "Swordsman", 
          "Magician", 
          "Daemon", 
          "Undead", 
          "Zombie"
      ];
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack;
      this.defence;
      if (!types.includes(type)) {
        throw new Error("Неверный тип!");
      };
      if (typeof name !== "string" || name.length < 2 || name.length > 10) {
        throw new Error("Имя должно содержать от 2 до 10 символов!");
      };
    };

    levelUp() {
      if (this.health === 0) {
        throw new Error("Нельзя повысить левел умершего!");
      } else {
        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
      }
    };
    
    damage(points) {
      if (this.health < 0) {
        throw new Error("Нельзя понизить здоровье умершего");
      };
      this.health -= points * (1 - this.defence / 100);
    };
  }
    