
const auth = {
    type: "OAuth2",
    user: "registroteca@gmail.com",
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
};

const mailoptions = {
    from: "registroteca@gmail.com",
    to: "registroteca@gmail.com",
    subject: "Gmail API working!",
};

module.exports = {
    auth,
    mailoptions,
};