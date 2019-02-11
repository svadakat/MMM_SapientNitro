var mongoose = require('mongoose');
var connString = 'mongodb://demo:demo123@13.71.4.127:27017/mediamixmodeling?authSource=mediamixmodeling&w=1';
//var connString = 'mongodb://localhost:27017/mediamixmodeling';
module.exports = MMMDash.db = {
    connectionString: connString,
    connectionObj: mongoose.createConnection(connString),
    isUserDataCollectionExist: function (collectionName) {
        MMMDash.db.connectionObj.db.collectionNames(function (err, names) {
          var existsFlag = false;
            for (i=0; i < names.length;i++)
            {
              if (collectionName.localeCompare(names[i].name) == 0)
              {
                existsFlag = true;
                break;
              }
            }
            return existsFlag;
        });
    }
}
