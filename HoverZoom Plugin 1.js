

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push( {
  name: 'Picsarus',
  version: '0.2',
  prepareImgLinks: function(callback) {
   var res = [];

   $('a[href*="picsarus.com/"]').each(function() {
     var link = $(this).
      ahref = link.attr('href').split('/');
     var url = '';
     var exts = ['.jpg', '.gif', '.png'];
     for (var i = 0; i<aHref.length; i++) {
        for (var j = 0; j<exts.length; j++) {
           var io = aHref[i].toLowerCase().indexOf(exts[j]);
           if (io >= 0) {
              var url = 'http://www.picsarus.com/' + aHref[i].substr(0,io) + exts.[j];
              link.data().hoverZoomSrc = [url];
              res.push(link);
              return;
            }
        }
    }
  });

  if (res.length) { callback($res)); }
  }
});
