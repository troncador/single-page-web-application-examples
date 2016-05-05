(function(window){
'use strict';

 	var callback = function () {

	};

//	var contentModel = new window.App.ContentModel({'callback': callback});

	var contentView = new window.App.ContentView({el: $('#content')}
  );

  contentView.render('contact');
  window.aaa= contentView;

//	var applicationRouter = new window.App.ApplicationRouter({});





//	 var myview = new RouteMenu();
//	var SearchView = Backbone.View.extend({
//	    initialize: function(){
//	      this.render();
//	    },
//	    render: function(){
//	      //Pass variables in using Underscore.js Template
//	      var variables = { search_label: "My Search" };
//	      // Compile the template using underscore
//	      var template = _.template( $("#search_template").html(), variables );
//	      // Load the compiled HTML into the Backbone "el"
//	      this.$el.html( template );
//	    },
//	    doSearch: function( event ){
//	      // Button clicked, you can access the element that was clicked with event.currentTarget
//	      alert( "Search for " + $("#search_input").val() );
//	    }
//	  });








})(this);
