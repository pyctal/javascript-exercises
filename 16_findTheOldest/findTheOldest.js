function getAge(person) {
  if (person.yearOfDeath) {
    return person.yearOfDeath - person.yearOfBirth;
  }
  return new Date().getFullYear() - person.yearOfBirth;
}

const findTheOldest = function (people) {
  return people.reduce((oldest, current) => {
    const oldestAge = getAge(oldest);
    const currentAge = getAge(current);
    return oldestAge > currentAge ? oldest : current;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
