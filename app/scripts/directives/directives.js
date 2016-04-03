'use strict';

angular.module('nikoApp')
.directive('affix', ['$document', '$window',function($document, $window){
	return {
		restrict:'A',
		link:function(scope, el, attrs){
			angular.element($window).on('scroll', function(){
				if(this.pageYOffset>100){
					el.addClass('affix');
				}
				else{
					el.removeClass('affix');
				}
			});
		}
	};
}]);