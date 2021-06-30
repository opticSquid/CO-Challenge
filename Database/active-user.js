const activeUser = require("../Schema/active-user");

const startSession = async (data) => {
  try {
    let newSession = new activeUser(data);
    await newSession.save();
    console.log("Session started\n", data);
    return { status: "Session started for the provided user", error: null };
  } catch (e) {
    console.error("Session could not be started for the user\n", data);
    return { status: "Session did not start", error: e };
  }
};

module.exports = { StartSession: startSession };
