angular.module('services', [])

.factory('CommonService', function($http) {
	var langs = [
        {name:'English', value:'eng'},
        {name:'中文', value:'chi'}
	];

	return {
		getLangs: function(){
			return langs;
		}
	}
})