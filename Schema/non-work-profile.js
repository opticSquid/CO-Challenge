const mongoose = require("mongoose");
const schema = mongoose.Schema;
let non_workProfile = new schema({
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  non_work_days: [
    {
      day_name: String,
      start: String,
      end: String,
      restricted_apps: {
        facebook: String,
        instagram: String,
        whatsapp: String,
        tiktok: String,
        mxtakatak: String,
        youtube: String,
        snapchat: String,
      },
    }
  ],
});
module.exports = mongoose.model("non-workProfile", non_workProfile);
