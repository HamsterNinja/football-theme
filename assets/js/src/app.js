$(document).ready(function (){
$('.livetable-content-inner').masonry({
  // options
  itemSelector: '.livetable-item',
  percentPosition: true,
  columnWidth: '.livetable-item'
});

    (function () {

        var youtube = document.querySelectorAll(".youtube");

        for (var i = 0; i < youtube.length; i++) {

            var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";

            var image = new Image();
            image.src = source;
            image.addEventListener("load", function () {
                youtube[i].appendChild(image);
            }(i));

            youtube[i].querySelector('.play-button').addEventListener("click", function () {

                var iframe = document.createElement("iframe");

                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("allowfullscreen", "");
                iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.parentNode.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

                this.innerHTML = "";
                this.parentNode.appendChild(iframe);
            });
        };

    })();

});