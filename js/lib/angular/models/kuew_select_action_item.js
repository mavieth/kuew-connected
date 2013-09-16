// Generated by CoffeeScript 1.6.3
(function() {
  'use strict';
  var app,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  app = angular.module('kuew');

  app.factory('KuewSelectActionItem', function(KuewActionItem, templatePath) {
    var KuewSelectActionItem;
    return KuewSelectActionItem = (function(_super) {
      __extends(KuewSelectActionItem, _super);

      function KuewSelectActionItem(scope, options) {
        KuewSelectActionItem.__super__.constructor.call(this, scope, options);
      }

      KuewSelectActionItem.prototype.templateUrl = templatePath('components/action-items/select.html');

      KuewSelectActionItem.prototype.validate = function() {
        return angular.isArray(this.options.options) && this.options.options.indexOf(this.value) >= 0;
      };

      return KuewSelectActionItem;

    })(KuewActionItem);
  });

}).call(this);
