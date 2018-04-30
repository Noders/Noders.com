const slack = require('slack');
const { SLACK_API_TOKEN } = process.env;

const arrayOfImageKeys = [
  'image_original',
  'image_512',
  'image_192',
  'image_72',
  'image_48',
  'image_32',
  'image_24'
];

const getBiggestImage = profile =>
  arrayOfImageKeys.find(key =>
    Object.prototype.hasOwnProperty.call(profile, key)
  );

const getProfilesWithImages = arrayOfProfiles =>
  arrayOfProfiles.filter(found => {
    const biggestImageKey = getBiggestImage(found.profile);
    if (!biggestImageKey) {
      return false;
    }
    return found.profile[biggestImageKey].lastIndexOf('gravatar') === -1;
  });

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
      const filteredMembers = getProfilesWithImages(members);
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
