var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

/******************************************************
** Insert data
** @db
** @tbName -- string
** @data -- json:[{key: value},{key: value},{key: value}]
** @callback -- function
*******************************************************/
function _insert(db, tbName, data, callback) {
    var collection = db.collection(tbName);

    collection.insert(data, function(err, result) {
        assert.equal(err, null);
        assert.equal(data.length, result.result.n);
        assert.equal(data.length, result.ops.length);

        callback(result);
        db.close();
    });
}

/******************************************************
** update data
** @db
** @tbName -- string
** @data -- json:{key: value}
** @callback -- function
*******************************************************/
function _update(db, tbName, data, callback) {
    var collection = db.collection(tbName);

    collection.update(data, function(err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);

        callback(result);
        db.close();
    });
}

/******************************************************
** remove data
** @db
** @tbName -- string
** @data -- json:{key: value}
** @callback -- function
*******************************************************/
function _remove(db, tbName, data, callback) {
    var collection = db.collection(tbName);

    collection.remove(data, function(err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);

        callback(result);
        db.close();
    });
}

/******************************************************
** find data
** @db
** @tbName -- string
** @data -- json:{key: value}
** @callback -- function
*******************************************************/
function _find(db, tbName, data, callback) {
    var collection = db.collection(tbName);

    collection.find(data).toArray(function(err, docs) {
        assert.equal(err, null);
        //console.dir(docs);

        callback(docs);
        db.close();
    });
}

exports.insert = function (tbName, data, callback) {
    var dbURI = 'mongodb://localhost:27017/iDawn';

    MongoClient.connect(dbURI, function(err, db) {
        assert.equal(null, err);

        console.log("Connected correctly to database.");

        _insert(db, tbName, data, callback);
    });
};

exports.update = function (tbName, data, callback) {
    var dbURI = 'mongodb://localhost:27017/iDawn';

    MongoClient.connect(dbURI, function(err, db) {
        assert.equal(null, err);

        console.log("Connected correctly to database.");

        _update(db, tbName, data, callback);
    });
};

exports.remove = function (tbName, data, callback) {
    var dbURI = 'mongodb://localhost:27017/iDawn';

    MongoClient.connect(dbURI, function(err, db) {
        assert.equal(null, err);

        console.log("Connected correctly to database.");

        _remove(db, tbName, data, callback);
    });
};

exports.find = function (tbName, data, callback) {
    var dbURI = 'mongodb://localhost:27017/iDawn';

    MongoClient.connect(dbURI, function(err, db) {
        assert.equal(null, err);

        console.log("Connected correctly to database.");

        _find(db, tbName, data, callback);
    });
};
