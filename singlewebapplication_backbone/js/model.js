(function(window){
'use strict';

  if(!(window.App)) {
    window.App = {}
  }

  var ContentModel = Backbone.Model.extend({
      initialize: function(){
        this.on('change:url', function (model) {
          var url = model.get('url');
          $.get( url, function ( data ) {
            model.set('template', data);
          });
        });
        this.on('change:template', function (model) {
          var callback = this.get('callback');
          callback(model);
        });
      }
  });

  window.App.ContentModel = ContentModel;

})(this);
