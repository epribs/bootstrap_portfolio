function readMore() {

var $el, $ps, $up, totalHeight;
    
      
      totalHeight = 0
    
      $el = $(".aboutMe .btn");
      $p  = $el.parent();
      $up = $p.parent();
      $ps = $up.find("p:not('.readMore')");
      
      // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
      $ps.each(function() {
        totalHeight += $(this).outerHeight();
      });
            
      $up
        .css({
          // Set height to prevent instant jumpdown when max height is removed
          "min-height": 850,
          "max-height": 890
        })
        .animate({
          "height": totalHeight
        });
      
      // fade out read-more
      $p.fadeOut();
      
      // prevent jump-down
      return false;
        
    
}