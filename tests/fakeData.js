module.exports = {
  cities: {
    Boston: {
      'New York': 50,
      Hartford: 25
    },
    Hartford: {
      Boston: 25,
      'New York': 35
    },
    'New York': {
      Boston: 50,
      Hartford: 35,
      Philadelphia: 40
    },
    Philadelphia: {
      'New York': 40
    }
  },
  citiesArr: [ 
    ['Boston','New York',50],
    ['Boston','Hartford',25],
    ['Hartford','New York',35],
    ['New York','Philadelphia',40] 
  ]
};
