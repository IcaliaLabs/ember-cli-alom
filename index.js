/* eslint-env node */
'use strict';

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-alom',

  treeForStyles: function treeForStyles(tree) {
    const styleTrees = [];

    if (this.app.project.findAddonByName('ember-cli-sass')) {
      styleTrees.push(new Funnel('node_modules/alom/scss', { destDir: '.' }));
    }

    if (tree) {
      styleTrees.push(tree);
    }

    return mergeTrees(styleTrees, { overwrite: true });
  }
};
