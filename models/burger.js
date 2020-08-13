var orm = require("../config/orm");

var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  insertOne: function (cb, cols, vals) {
    orm.selectAll("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (objColVals, condition, cb) {
    orm.selectAll("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
