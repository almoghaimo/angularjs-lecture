import angular from 'angular';

const entry = angular.module('app', []);

function createDirective(name){
  return function(){
    return {
      restrict: 'E',
      compile: function(tElem, tAttrs){
        // In AngularJS the original DOM is often referred to as the the template element, which stands for template element.
        console.log(`${name} : compile ${tElem.html()}`);
        return {
          pre: function(scope, iElem, iAttrs){
            console.log(`${name} : pre link ${iElem.html()}`);
          },
          post: function(scope, iElem, iAttrs) {
            console.log(`${name} : post link ${iElem.html()}`);
          }
        };
      }
    };
  };
}

entry.directive('levelOne', createDirective('levelOne'));
entry.directive('levelTwo', createDirective('levelTwo'));
entry.directive('levelThree', createDirective('levelThree'));
