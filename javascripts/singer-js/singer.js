(function() {
  var Singer;

  Singer = (function() {

    function Singer() {}

    Singer.key = "";
    Singer.getName = function(query, callback) {
      var url;
      url = "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist="+ query +"&api_key=6ec8aba4f0fc8dfbf49e029bc6efc71e&format=json";
      return $.ajax({
        dataType: "jsonp",
        context: window,
        data: {
          query: query,
          format: "json"
        },
        type: 'get',
        url: url,
        data: null,
        success: callback,
        crossDomain: true
      });
    };

    Singer.getInfo = function(query, callback) {
      var url;
      url = "http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist="+ query +"&api_key=6ec8aba4f0fc8dfbf49e029bc6efc71e&format=json";
      return $.ajax({
        dataType: "jsonp",
        context: window,
        data: {
          query: query,
          format: "json"
        },
        type: 'get',
        url: url,
        data: null,
        success: callback,
        crossDomain: true
      });
    };

    return Singer;

  })();

  window.Singer = Singer;

}).call(this);


