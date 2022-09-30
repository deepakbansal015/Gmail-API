require("dotenv").config();

const auth = {
  type: "OAuth2",
  user: "bdeepak014@gmail.com",
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
};

const mailoptions = {
  from: "Deepak Bansal &lt;bdeepak014@gmail.com>",
  to: "bdeepak014@gmail.com",
  subject: "Comms Testing",
};

module.exports = {
  auth,
  mailoptions,
};