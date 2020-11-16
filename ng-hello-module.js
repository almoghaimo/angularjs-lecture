import angular from 'angular';
import ReactHello from './react-hello.jsx';

const {react2angular} = require('react2angular');

const ngHelloModule = angular.module('helloModule', []);

ngHelloModule.component('reactHelloComponent', react2angular(ReactHello, ['message', 'onMessageChange']));

const reactTemplate = `<div>
<div>Angular: <input type="text" ng-model="message" ></div>
<react-hello-component message="message" on-message-change="onReactMessageChange">
</div>`;

ngHelloModule.directive('helloDirective', ['$compile', function ($compile) {
  return {
    template: `</div>`,
link(scope, element, _, ctrl) {
      console.log("link");
      scope.message = 'Hello';
      scope.onReactMessageChange = (message) => {
        $scope.message = message;
        $scope.$apply();
      };
      const el = $compile(reactTemplate)(scope);
      element.parent().append(el);
    }
  };
}]);
