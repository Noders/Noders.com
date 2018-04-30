const slack = require('slack');

const { SLACK_API_TOKEN } = process.env;

const getProfilesWith192Image = arrayOfUsers =>
  arrayOfUsers
    .filter(users => users.profile['image_192'].lastIndexOf('gravatar') === -1)
    .map(user => ({
      username: user.name,
      image: user.profile['image_192']
    }));

exports.handler = function(event, context, callback) {
  slack.users
    .list({ token: SLACK_API_TOKEN })
    .then(({ members }) => {
      const filteredMembers = getProfilesWith192Image(members);
      callback(null, {
        statusCode: 200,
        body: filteredMembers
      });
    })
    .catch(error => {
      callback(null, {
        statusCode: 500,
        body: 'Error getting users'
      });
    });
};
