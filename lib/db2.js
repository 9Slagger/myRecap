const userData = [
  { id: 1, name: "Mark", skillId: 3 },
  { id: 2, name: "George", skillId: 2 },
  { id: 3, name: "Wat", skillId: 3 },
  { id: 4, name: "Tant", skillId: 1 },
  { id: 5, name: "Sun", skillId: 2 }
];

const skillData = [
  { id: 1, skillName: "React" },
  { id: 2, skillName: "Vue" },
  { id: 3, skillName: "Angular" },
];

const User = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userData);
    }, 2000);
  });
};

const UserWithFilter = obj => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        userData.filter(data =>
          obj.where.id
            ? data.id === obj.where.id
            : obj.where.name && data.name === obj.where.name
        )
      );
    }, 2000);
  });
};

const UserWithRandomError = obj => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(
          userData.filter(data =>
            obj.where.id
              ? data.id === obj.where.id
              : obj.where.name && data.name === obj.where.name
          )
        );
      } else {
        reject("bad request");
      }
    }, 2000);
  });
};

const SkillWithFilter = obj => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        skillData.filter(data =>
          obj.where.id
            ? data.id === obj.where.id
            : obj.where.skillName && data.skillName === obj.where.skillName
        )
      );
    }, 3500);
  });
};

const db2 = { User, UserWithFilter, UserWithRandomError, SkillWithFilter };
module.exports = db2;
