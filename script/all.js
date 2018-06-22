// jQuery(window).scroll(function() {
//     jQuery(this).scrollTop() > 220 ? jQuery(".back-to-top").fadeIn(500) : jQuery(".back-to-top").fadeOut(500)
// }), jQuery(".back-to-top").click(function(t) {
//     return t.preventDefault(), jQuery("html, body").animate({
//         scrollTop: 0
//     }, 500), !1
// })


jQuery(document).ready(function(t) {
    var e = t(document).width();
    if(e > 1e3) {
        var n = t(".category-box").height();
        t(".carousel-inner img").height(n)
    }
    var i, r = (i = t(".detail-pro"), Math.max.apply(null, i.map(function() {
        return t(this).innerHeight()
    }).get()));
    e < 600 && t(".detail-pro").height(r);
    var o = t(".list-news").height();
    t(".content-review").height(o - 40), t(".owl-carousel").owlCarousel({
        loop: !0,
        margin: 0,
        nav: !0,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
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