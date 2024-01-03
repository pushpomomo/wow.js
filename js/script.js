// js code
// wow js
wow = new WOW(
     {
     boxClass:     'wow',      // default
     animateClass: 'animated', // default
     offset:       0,          // default
     mobile:       true,       // default
     live:         true        // default
})


wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box){
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
  }
 }
);
    wow.init();
    document.getElementById('moar').onclick = function(){
    var section = document.createElement('section');
    section.className = 'section--purple wow fadeInDown';
    this.parentNode.insertBefore(section, this);
};