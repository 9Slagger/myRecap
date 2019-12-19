const db1 = require("./lib/db1");
const db2 = require("./lib/db2");

async function main() {
  // db1.User((error, data) => {
  //   if (error) {
  //     console.log("❌ ", error);
  //   } else {
  //     console.log("✅ ", data);
  //   }
  // });

  // db2
  //   .User()
  //   .then(data => {
  //     console.log("✅ ", data);
  //   })
  //   .catch(error => {
  //     console.log("❌ ", error);
  //   });

  // db1.UserWithFilter({ where: { id: 1 } }, (error, data) => {
  //   if (error) {
  //     console.log("❌ ", error);
  //   } else {
  //     console.log("✅ ", data);
  //   }
  // });

  // db2
  //   .UserWithFilter({ where: { name: "George" } })
  //   .then(data => {
  //     console.log("✅ ", data);
  //   })
  //   .catch(error => {
  //     console.log("❌ ", error);
  //   });

  // db1.UserWithRandomError({ where: { id: 1 } }, (error, data) => {
  //   if (error) {
  //     console.log("❌ ", error);
  //   } else {
  //     console.log("✅ ", data);
  //   }
  // });

  // db2
  //   .UserWithRandomError({ where: { id: 1 } })
  //   .then(data => {
  //     console.log("✅ ", data);
  //   })
  //   .catch(error => {
  //     console.log("❌ ", error);
  //   });

  // db1.SkillWithFilter({ where: { id: 1 } }, (error, data) => {
  //   if (error) {
  //     console.log("❌ ", error);
  //   } else {
  //     console.log("✅ ", data);
  //   }
  // });

  // db2
  //   .SkillWithFilter({ where: { id: 1 } })
  //   .then(data => {
  //     console.log("✅ ", data);
  //   })
  //   .catch(error => {
  //     console.log("❌ ", error);
  //   });
}

main();
