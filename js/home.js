$(document).ready(function() {
    $.ajax({
        url: "/homePageBanner.json",
        method: "GET",
        success: (response) => {
            response.slides.forEach((item) => {
               $(".home-page-banner").append(`
                    <div class="item">
                        <img class="banner-image" src="${item.src}">  
                         
                         <h3>${item.title}</h3>
                    </div>
               `)
            });
        }
    }).then(() => {
        $(".home-page-banner").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true
        })
    });


});