const activeUser = require("../Schema/active-user");

const startSession = async (data) => {
  try {
    let newSession = new activeUser(data);
    await newSession.save();
    console.log("Session started\n", data);
    return { status: "Session started for the provided user", error: null };
  } catch (e) {
    console.error(
      "Session could not be started for the user\n",
      data,
      "\nerror: ",
      e
    );
    return { status: "Session did not start", error: e };
  }
};
const deleteSession = async (token,ip) => {
  try {
    let session = await activeUser.deleteOne({ auth_token: token, IP:ip });
    console.log(`Session deleted ${session}`);
    return { status: "user logged out", error: null };
  } catch (e) {
    console.error("Session could not be terminated, error: ", error);
    return { status: "log out failed ", error: e };
  }
};
module.exports = { StartSession: startSession, DeleteSession:deleteSession };
