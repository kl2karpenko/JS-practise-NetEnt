function User(name, last_name, age) {
  this.name = name;
  this.last_name = last_name;
  this.age = age;

  this.getFullName = function () {
    return `Full User Name: ${this.last_name} ${this.name}`;
  };

  return this;
}

function Admin(name, last_name, age) {
  User.call(this, name, last_name, age);

  this.isAdmin = function () {
    return true;
  };

  return this;
}

var Vasya = {};

User.call(Vasya, "Vasya", "Pypkin", 89);

console.log(Vasya, 'Vasya');
console.log(Vasya.getFullName());

var newAdmin = {};

Admin.call(newAdmin, "Vasya Admin", "Pypkin2", 45);

console.log(newAdmin);
console.log(newAdmin.getFullName());
console.log(newAdmin.isAdmin());

