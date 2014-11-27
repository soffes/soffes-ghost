(function() {
  var addLoadEvent, externalLinks;

  addLoadEvent = function(func) {
    var oldonload;
    oldonload = window.onload;
    if (typeof window.onload !== "function") {
      return window.onload = func;
    } else {
      return window.onload = function() {
        if (oldonload) {
          oldonload();
        }
        return func();
      };
    }
  };

  externalLinks = function() {
    var anchor, external, rel, _i, _len, _ref, _results;
    if (!document.getElementsByTagName || !String.prototype.indexOf) {
      return;
    }
    _ref = document.getElementsByTagName("a");
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      anchor = _ref[_i];
      rel = anchor.getAttribute("rel");
      external = rel && rel.indexOf("external") >= 0;
      if (anchor.getAttribute("href") && external === true) {
        _results.push(anchor.target = "_blank");
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  addLoadEvent(externalLinks);

}).call(this);
