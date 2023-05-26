class Plan {
  constructor(name, description, type) {
    this.name = name;
    this.description = description;
    this.type = type;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setDescription(description) {
    this.description = description;
    return this;
  }

  setType(type) {
    this.type = type;
    return this;
  }

  print() {
    console.log(`Name: ${this.name}`);
    console.log(`Description: ${this.description}`);
    console.log(`Type: ${this.type}`);
  }
}

const a = new Plan("Monthly Plan", "Unlimited Access for the whole month", "Bronze");
a.print();

a.setName("Yearly Plan")
    .setDescription("Unlimited Access for the whole year")
    .setType("Gold")
    .print()
