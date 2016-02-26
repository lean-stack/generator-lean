var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  writing: {
    html: function () {
      this.fs.copyTpl(
        this.templatePath('index.html'),
        this.destinationPath('app/index.html')
      );
    }
  }
});
