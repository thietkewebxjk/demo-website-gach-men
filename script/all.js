// jQuery(window).scroll(function() {
//     jQuery(this).scrollTop() > 220 ? jQuery(".back-to-top").fadeIn(500) : jQuery(".back-to-top").fadeOut(500)
// }), jQuery(".back-to-top").click(function(t) {
//     return t.preventDefault(), jQuery("html, body").animate({
//         scrollTop: 0
//     }, 500), !1
// })


jQuery(document).ready(function(t) {
    
    jQuery(window).scroll(function() {
        jQuery(this).scrollTop() > 220 ? jQuery(".back-to-top").fadeIn(500) : jQuery(".back-to-top").fadeOut(500)
    }), jQuery(".back-to-top").click(function(t) {
        return t.preventDefault(), jQuery("html, body").animate({
            scrollTop: 0
        }, 500), !1
    }), t(".down-menu").click(function() {
        t(this).next("ul").slideToggle(300)
    }), t(".click-menu").click(function(e) {
        t(".main-menu").slideToggle(300)
    })
});