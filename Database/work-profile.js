const workProfile = require("../Schema/work-profile");

const addorModifyProfile = async (data) => {
  try {
    let newData = await workProfile.findOneAndUpdate(
      { Email: data.Email },
      { $set: data },
      { upsert: true, new: true, useFindAndModify: false }
    );
    console.log(
      "New work profile created for the provided user, Data: ",
      newData
    );
    return { status: "New work profile created", data: newData, error: null };
  } catch (e) {
    console.log("New work profile was not created, error: ", e);
    return { status: "New work profile not created", data: null, error: e };
  }
};
module.exports = { CreateProfile: addorModifyProfile };
