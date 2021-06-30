const user = require("../Schema/users");

const addUser = async(data) => {
  try {
    let newUser = new user(data);
    await newUser.save();
    console.log("Added verified user to DB");
    return { status: "User verified and added to DB", error: null };
  } catch (e) {
    console.error("Verified user was not added to DB, error occoured:\n", e);
    return { status: "Verified user could not be added to DB", error: e };
  }
};

module.exports = { AddnewUser: addUser };
