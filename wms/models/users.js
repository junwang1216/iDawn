var db = require('./db');

/*db.insert("myuser", [{id:11,name:"aaa",age:12}], function (ret) {
    console.log(ret);
});
db.insert("myuser", [{id:11,name:"aaa",age:12}], function (ret) {
    console.log(ret);
});*/

db.find("myuser", {}, function (ret) {
  console.log("---------------");
    console.log(ret);
});

db.find("myuser", {aa: 11}, function (ret) {
  console.log("---------------");
    console.log(ret);
});

db.find("myuser", {age: 12}, function (ret) {
  console.log("---------------");
    console.log(ret);
});
