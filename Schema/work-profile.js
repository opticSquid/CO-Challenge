const mongoose = require("mongoose");
const schema = mongoose.Schema;
let workProfile = new schema({
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  work_days: [
    {
      day_name: String,
      start: String,
      end: String,
      list_of_blocked_apps: [String],
    }
    // Don't put a comma here
  ],
});
module.exports = mongoose.model("workProfile", workProfile);
