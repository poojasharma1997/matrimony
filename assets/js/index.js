$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
    $("#sidebar").load("sidebar.html");  


});


//? ############################ Header Toggle ###########################

$(window).scroll(function() {

    if ($(this).scrollTop() > 60){  
        $('.headerFixed').addClass("contentFixed");
    }
    else{
        $('.headerFixed').removeClass("contentFixed");
    }
});


//? ###########################  Home Page Start  ###########################

if ($("[page-name=serviceDetail]").length) {

    var serviceOuterImg = document.querySelectorAll('.serviceOuterImg');
    var serviceListImg = document.querySelectorAll('.serviceListImg');
    let owlServiceDetail = document.querySelector('.owlServiceDetail');
    
    owlServiceDetail.addEventListener('click', (e) => {
        let a = e.currentTarget;

    })
}


//? ###########################  MyGallery New Page Start  ###########################

if ($("[page-name=myGallery]").length) {

    // Justify Gallery
    $("#myGalleryAlbum").justifiedGallery({
        rowHeight: 170,
        lastRow: 'nojustify',
        margins: 16,
        captions: false
    });


    // glightbox

    var lightbox = GLightbox();

}
