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
  { id: 3, skillName: "Angular" }
];

const User = callback => {
  setTimeout(() => {
    callback(null, userData);
  }, 2000);
};

const UserWithFilter = (obj, callback) => {
  setTimeout(() => {
    callback(
      null,
      userData.filter(data =>
        obj.where.id
          ? data.id === obj.where.id
          : obj.where.name && data.name === obj.where.name
      )
    );
  }, 2000);
};

const UserWithRandomError = (obj, callback) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      callback(
        null,
        userData.filter(data =>
          obj.where.id
            ? data.id === obj.where.id
            : obj.where.name && data.name === obj.where.name
        )
      );
    } else {
      callback({ message: "bad request" });
      // callback("bad request", null)
    }
  }, 2000);
};

const SkillWithFilter = (obj, callback) => {
  setTimeout(() => {
    callback(
      null,
      skillData.filter(data =>
        obj.where.id
          ? data.id === obj.where.id
          : obj.where.skillName && data.skillName === obj.where.skillName
      )
    );
  }, 3500);
};

const db1 = { User, UserWithFilter, UserWithRandomError, SkillWithFilter };
module.exports = db1;
