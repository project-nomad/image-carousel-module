const mysql = require('mysql');

const config = require('./config.js');

const connection = mysql.createConnection(config);

connection.connect();

module.exports.getListingData = function getListings(listingId, callBack) {
  const query = `SELECT * from LISTINGS WHERE Id = ${listingId};`;
  connection.query(query, (err, data) => {
    if (err) {
      callBack(err, null);
    } else if (data) {
      callBack(null, data);
    }
  });
};

module.exports.getPictureData = function getPictures(listingId, callBack) {
  const queryPic = `SELECT * FROM REFRENCEPIC WHERE listing_id = ${listingId};`;
  connection.query(queryPic, (err, data) => {
    if (err) {
      callBack(err, null);
    } else if (data) {
      callBack(null, data);
    }
  });
};

