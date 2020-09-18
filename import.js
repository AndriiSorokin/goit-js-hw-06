import users from "./task.js";

// task 1

const getUserNames = (users) => {
  const result = users.map((user) => user.name);
  return result;
};

console.log(getUserNames(users));

// task 2

const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue"));

// task 3

const getUsersWithGender = (users, gender) => {
  return users.filter((user) => user.gender === gender).map((user) => user.name);
};

console.log(getUsersWithGender(users, "male"));
console.log(getUsersWithGender(users, "female"));

// task 4

const getInactiveUsers = (users) => {
  return users.filter((user) => !user.isActive);
};

console.log(getInactiveUsers(users));

// task 5

const getUserWithEmail = (users, email) => {
  const searchMail = users.find((user) => user.email === email);
  return searchMail;
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));

// task 6

const getUsersWithAge = (users, min, max) => {
  const searchAge = users.filter((user) => user.age > min && user.age < max);
  return searchAge;
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

task 7

const calculateTotalBalance = (users) => {
  const calcBalance = users.reduce((total, user) => total + user.balance, 0);
  return calcBalance;
};

console.log(calculateTotalBalance(users));

task 8

const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => user.friends.includes(friendName)).map((user) => user.name);

};

console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));

task 9

const getNamesSortedByFriendsCount = (users) => {
  return users.sort((a, b) => a.friends.length - b.friends.length).map(user => user.friends);
};

console.log(getNamesSortedByFriendsCount(users));

task 10

const getSortedUniqueSkills = (users) => {
  return users
    .reduce((arr, user) => {
      arr.push(...user.skills);
      return arr;
    }, [])
    .filter((elem, index, arr) => index === arr.indexOf(elem))
    .sort();
};
