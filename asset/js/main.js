var apiURL = 'https://api.myjson.com/bins/reyab';

new Vue({

  el: '#jobDesigner',

  data() {
    return {
      items: []
    }
  },

  created: function () {
    this.fetchData();
  },

  methods: {
    fetchData: function() {
      var self = this;
      $.get(apiURL, function(data) {
        self.items = data.data;
      });

    }

  }
});

(function ($){
  "use strict";
  $(document).ready(function () {
    $('#toggle').click(function(e) {
      e.preventDefault();
    $('.search').toggleClass('reveal');
    });
  });
})(jQuery);
