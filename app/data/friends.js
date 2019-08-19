// Create the array to hold all the imported friends
const friends = [
  {
    name: 'Jose',
    photo: 'https://pixabay.com/photos/human-man-face-view-bart-hat-1411499/',
    scores: ['5', '5', '5', '5', '5', '5', '4', '3', '2', '1'],
  },
  {
    name: 'Dirk',
    photo: 'https://pixabay.com/photos/man-face-wet-male-head-person-945482/',
    scores: ['2', '2', '3', '1', '5', '4', '2', '1', '4', '5'],
  },
  {
    name: 'Joy',
    photo: 'https://pixabay.com/photos/girl-beauty-woman-model-hair-2359121/',
    scores: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
  },
];

// Export the array so it can be used on apiRoutes.js
module.exports = friends;
