/*
 * slush-angular-component
 * https://github.com/wisam/slush-angular-component
 *
 * Copyright (c) 2015, wzaghal
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    _ = require('underscore.string'),
    inquirer = require('inquirer'),
    path = require('path');

function format(string) {
    var username = string.toLowerCase();
    return username.replace(/\s/g, '');
}


var defaults = (function () {
    var workingDirName = path.basename(process.cwd()),
      homeDir, osUserName, configFile, user;

    return {
        componentName: workingDirName
    };
})();

gulp.task('default', function (done) {

  var prompts = [
  {
      name: 'moduleName',
      message: 'What is the name of your module ?',
      default: 'my-component'
  },
  {
      name: 'componentName',
      message: 'What is the name of your component?',
      default: 'myComponent'
  }
  ];

  inquirer.prompt(prompts,
    function (answers) {

      var slugModuleName = _.slugify(answers.moduleName);
      answers.slugModuleName = slugModuleName;
      answers.capitalizedComponentName = _.capitalize(answers.componentName);

      answers.modules = {
        directive: answers.moduleName+'-directive',
        controller: answers.moduleName+'-controller',
        service: answers.moduleName+'-service'
      };
      answers.templateUrl = 'components/' + answers.moduleName
      + '/' + answers.moduleName + '.html';

      answers.components = {
        directive: answers.componentName,
        controller: answers.capitalizedComponentName+'Controller',
        controllerAs: answers.componentName+'Controller',
        service: answers.componentName+'service'
      };


      gulp.src(__dirname + '/templates/**')
        .pipe(template(answers))
        .pipe(rename(function (file) {
            file.basename = file.basename.replace(/component/,answers.moduleName);
        }))
        .pipe(conflict('./'))
        .pipe(gulp.dest('./test'))
        .pipe(install())
        .on('end', function () {
          done();
          });
      });
});



