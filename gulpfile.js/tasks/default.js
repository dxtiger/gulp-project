var gulp            = require('gulp')
var gulpSequence    = require('gulp-sequence')
var getEnabledTasks = require('../lib/getEnabledTasks')
var main = require('./createMain');

gulp.task('default', function(cb) {
  var tasks = getEnabledTasks('watch');
  var ncb = function(){
  	main();
  	cb();
  }
  gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, 'watch', ncb)
})
