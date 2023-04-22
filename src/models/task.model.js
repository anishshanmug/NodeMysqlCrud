'use strict';
var dbConn = require('./../../config/db.config');
//task object create
var Task= function(task){
  this.id = task.id;
  this.name = task.name;
  this.description = task.description;
  this.status = task.status;

};
Task.create = function (newT, result) {
dbConn.query("INSERT INTO task set ?", newT, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Task.findById = function (id, result) {
dbConn.query("Select * from tasks where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Task.findAll = function (result) {
dbConn.query("Select * from tasks", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('tasks : ', res);
  result(null, res);
}
});
};
Task.update = function(id, task, result){
dbConn.query("UPDATE tasks SET id=?,description=?,status=?", [task.id,task.name,task.description,task.id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Task.delete = function(id, result){
dbConn.query("DELETE FROM tasks WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Task;
