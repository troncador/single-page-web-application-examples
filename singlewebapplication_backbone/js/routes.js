(function(window){
  'use strict';

  if(!(window.App)) {
    window.App = {}
  }


	var ApplicationRouter = Backbone.Router.extend({
    routes: {
  		'*path': 'defaultFunction'
    },
  	defaultFunction: function (path) {
  			console.log(path);
  	},
  	initialize: function(options) {

  	}
	});

  window.App.ApplicationRouter = ApplicationRouter;

  Backbone.history.start({
	    pushState: true
	});


  // http://stackoverflow.com/questions/12081894/backbone-router-navigate-and-anchor-href
  $(document).on("click", "a:not([data-bypass])", function(evt) {
    var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
    var root = location.protocol + "//" + location.host + Backbone.history.options.root;

    if (href.prop && href.prop.slice(0, root.length) === root) {
      evt.preventDefault();
      Backbone.history.navigate(href.attr, true);
    }
  });

})(this);
