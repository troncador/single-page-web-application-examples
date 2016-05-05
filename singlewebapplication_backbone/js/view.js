(function(window){
'use strict';

  if(!(window.App)) {
    window.App = {}
  }

  var ContentView =  Backbone.View.extend({
    template: _.template(''),

    initialize: function(options){
        this.changeTemplate('index');
    },

    changeTemplate: function(templateFilename) {
      var that = this;
      $.get("/template/" + templateFilename + ".html.frg", function(template){
        that.template = _.template(template);
        that.render();
      });
    },
    
    render: function(){
      var html = this.template({});
      this.$el.html(html);
    }
  });

  window.App.ContentView = ContentView;

})(this);
