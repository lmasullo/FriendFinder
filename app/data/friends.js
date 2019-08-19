// Create the array to hold all the imported friends
const friends = [
  {
    name: 'Jose',
    photo:
      'https://cdn.pixabay.com/photo/2016/05/23/23/32/human-1411499_960_720.jpg',
    scores: ['5', '5', '5', '5', '5', '5', '4', '3', '2', '1'],
  },
  {
    name: 'Dirk',
    photo:
      'https://cdn.pixabay.com/photo/2015/09/18/11/46/man-945482_960_720.jpg',
    scores: ['2', '2', '3', '1', '5', '4', '2', '1', '4', '5'],
  },
  {
    name: 'Joy',
    photo:
      'https://cdn.pixabay.com/photo/2017/05/31/04/59/girl-2359121_960_720.jpg',
    scores: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
  },
];

// Export the array so it can be used on apiRoutes.js
module.exports = friends;
