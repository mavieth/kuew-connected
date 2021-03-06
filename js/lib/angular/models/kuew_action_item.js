// Generated by CoffeeScript 1.6.3
(function() {
  'use strict';
  var app;

  app = angular.module('kuew');

  app.factory('KuewActionItem', function($rootScope) {
    var KuewActionItem;
    return KuewActionItem = (function() {
      function KuewActionItem(scope, options) {
        var s,
          _this = this;
        s = angular.isDefined(scope) ? scope : $rootScope;
        this.scope = s.$new();
        this.scope.editing = true;
        this.scope.value = null;
        this.scope.options = options || {};
        this.scope.beginEdit = function() {
          return _this.beginEdit();
        };
        this.scope.finishEdit = function() {
          return _this.finishEdit();
        };
        this.scope.isValid = false;
        this.scope.$watch('isValid', function() {
          return _this.scope.$emit('event:itemIsValidChanged', _this, _this.scope.isValid, {
            freeze: _this.options.freezeIfValid !== false
          });
        });
        this.scope.$watch('value', function() {
          return _this.isValid;
        });
        Object.defineProperty(this, 'editing', {
          get: function() {
            return this.scope.editing;
          }
        });
        Object.defineProperty(this, 'value', {
          get: function() {
            return this.scope.value;
          },
          set: function(v) {
            return this.scope.value = v;
          }
        });
        Object.defineProperty(this, 'isValid', {
          get: function() {
            return this.scope.isValid = this.validate();
          }
        });
        Object.defineProperty(this, 'options', {
          get: function() {
            return this.scope.options;
          }
        });
      }

      KuewActionItem.prototype.beginEdit = function() {
        return this.scope.editing = true;
      };

      KuewActionItem.prototype.finishEdit = function() {
        return this.scope.editing = false;
      };

      KuewActionItem.prototype.reset = function() {
        this.scope.value = null;
        return this.scope.editing = true;
      };

      KuewActionItem.prototype.validate = function() {
        return false;
      };

      KuewActionItem.prototype.tamplateUrl = void 0;

      KuewActionItem.prototype.setDefaultOption = function(key, value) {
        if (!angular.isDefined(this.options[key])) {
          return this.options[key] = value;
        }
      };

      return KuewActionItem;

    })();
  });

}).call(this);
