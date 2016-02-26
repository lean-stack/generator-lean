var generators = require('yeoman-generator');

// Node packages
var path = require('path');

// NPM dependencies
var _s = require('underscore.string');

module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  initializing: {
    setPaths: function() {
      this.sourceRoot(path.join(__dirname, '../templates'));
    }
  },

  prompting: {},

  configuring: {},

  writing: {
    packageJSON: function () {
     this.fs.copy(
       this.templatePath('_package.json'),
       this.destinationPath('package.json')
     );
    },
    bower: function () {
      var bowerJson = {
        name: _s.slugify(this.appname),
        private: true,
        dependencies: {}
      };
      this.fs.writeJSON('bower.json', bowerJson);
    },
    gulpfile: function () {
      this.fs.copy(
        this.templatePath('gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
    },
    styles: function () {
      this.fs.copy(
        this.templatePath('app/styles/app.css'),
        this.destinationPath('app/styles/app.css')
      );
    },
    scripts: function () {
      this.fs.copy(
        this.templatePath('app/scripts/app.js'),
        this.destinationPath('app/scripts/app.js')
      );
    },
    html: function () {
      this.fs.copyTpl(
        this.templatePath('app/index.html'),
        this.destinationPath('app/index.html')
      );
    }
  },

  conflict: {},

  install: function() {
    this.installDependencies();
  },

  end: {}
});
