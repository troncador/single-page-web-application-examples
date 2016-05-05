(function(window){
  'use strict';

  if(!(window.App)) {
    window.App = {}
  }

  //  http://www.tutorialspoint.com/backbonejs/router_route.htm
	var ApplicationRouter = Backbone.Router.extend({
	    routes: {
				'': function(){console.log('why');},
				'ca/:name(/:page)/index.html' : 'showCategory',
				'c/:path/index.html': 'defaultFunction',
				'category/*path': 'defaultFunction',
				'*path': 'defaultFunction'
	    },
			defaultFunction: function (path) {
					console.log(path);
			},
			defaultFunction2: function (path) {
					console.log("path");
			},
			showCategory: function () {
					console.log(arguments);
			},
			initialize: function(options) {
				// Si no pongo el callback busca la función
				// this.route(route, name, [callback])

				this.route(/^(.*?)\/open.html$/, 'defaultFunction2' );
				this.route('b/:path/index.html', 'defaultFunction2',
						function(){console.log(arguments);} );
			}
	});

  window.App.ApplicationRouter = ApplicationRouter;

  Backbone.history.start({
	    pushState: true
	});

})(this);
