function getUserInterfaceMethod() {
  var createdUsersCunt = 0;

  function __createUser (name, last_name, age, gender) {
    // private variables name, last_name, age, gender

    // Инкапсуляция
    // closure using for createdUsersCunt
    createdUsersCunt++;

    return {
      changeName: function (changedName) {
        name = changedName;
        return `Change name: ${name} to: ${changedName}`;
      },
      getFullName: function () {
        return `${last_name} ${name}`;
      },
      getLastName: function () {
        return last_name;
      },
      getIfOlderThan18: function () {
        return age >= 18;
      },
      getIfMan: function () {
        return gender.toLowerCase() === 'man';
      },
      getIfWoman: function () {
        return gender.toLowerCase() === 'woman';
      },
      // Наследование
      createChildUser: function (name, age, gender) {
        var childUser =  __createUser (name, this.getLastName(), age, gender);
        var parent = this;

        // add method for child element
        childUser.getParent = function () {
          return parent;
        };

        // Полиморфизм:
        // add method for child element
        childUser.getFullName = function () {
          console.log(`get FullName from child of: ` + parent.getFullName());

          return parent.getFullName();
        };

        return childUser;
      }
    };
  }

  __createUser.getNumberOfCreatedUsers = function () {
    return createdUsersCunt;
  };

  __createUser.resetUsersCount = function () {
    createdUsersCunt = 0;
  };

  return __createUser;
}

var createUser = getUserInterfaceMethod();
console.log(createUser.getNumberOfCreatedUsers());

var Vasya = createUser("Vasya", "Pypkin", 56, 'man');
var Petya = createUser("Petya", "Foo", 13, 'man');
var Katya = createUser("Katya", "Karp", 34, 'Woman');

console.log(Vasya.getFullName());
console.log(Vasya.changeName("KKKK"));
console.log(Katya.getFullName());
console.log(Vasya.getFullName());

var VasyaYanger = Vasya.createChildUser("Vasya yanger", 12, 'man')
console.log(VasyaYanger.getFullName());

console.log(createUser.getNumberOfCreatedUsers());

