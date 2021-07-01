const NonWorkProfile = require("../Schema/non-work-profile");

const addorModifyProfile = async (data) => {
  try {
    let newData = await NonWorkProfile.findOneAndUpdate(
      { Email: data.Email },
      { $set: data },
      { upsert: true, new: true, useFindAndModify: false }
    );
    console.log(
      "New non-work profile created for the provided user, Data: ",
      newData
    );
    return { status: "New non-work profile created", data: newData, error: null };
  } catch (e) {
    console.log("New non-work profile was not created, error: ", e);
    return { status: "New non-work profile not created", data: null, error: e };
  }
};
module.exports = { CreateProfile: addorModifyProfile };
