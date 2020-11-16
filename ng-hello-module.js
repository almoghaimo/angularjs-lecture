import angular from 'angular';
import ReactHello from './react-hello.jsx';

const {react2angular} = require('react2angular');

const ngHelloModule = angular.module('helloModule', []);

ngHelloModule.component('reactHelloComponent', react2angular(ReactHello, ['message', 'onMessageChange', 'almog']))

ngHelloModule.directive('helloDirective', function () {
  return {
    controller: function ($scope) {
      $scope.message = 'Hello';
      $scope.onReactMessageChange = (message) => {
        $scope.message = message;
        $scope.$apply();
      };
    },
    template: `<div>
      <div>Angular: <input type="text" ng-model="message" ></div>
      <react-hello-component message="message" on-message-change="onReactMessageChange">
      </div>`,
    link(scope, element, _, ctrl) {
      console.log("link");
      scope.message = 'Hello from link';
    }
  };
});
