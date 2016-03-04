angular.module('myApp',
	[
	    'ngRoute',
	    'ngSanitize',
        'ngStorage',
        'com.2fdevs.videogular',
        'com.2fdevs.videogular.plugins.controls',
        'com.2fdevs.videogular.plugins.overlayplay',
        'com.2fdevs.videogular.plugins.poster'
	]
).filter('javaDate', function () {
    return function (javaDateString) {
      return moment(javaDateString, "ddd MMM DD HH:mm:ss zzz gggg")
        .format("ddd, DD.MM.YYYY ");
    };
  });
