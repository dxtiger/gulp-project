var config       = require('../config')
var gulp         = require('gulp')
var gulpSequence = require('gulp-sequence')
var getEnabledTasks = require('../lib/getEnabledTasks')
var main = require('./createMain');
gulp.task('release',function(cb) {
  var tasks = getEnabledTasks('production');
  var ncb = function(){
  	main();
  	cb();
  }
  gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, 'rev', ['server','browserSync'] ,ncb)
})
