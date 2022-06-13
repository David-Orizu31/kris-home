$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      var $banner = $(".single-item");
      $nav.toggleClass('fixed-top', $(this).scrollTop() > $nav.height());
      $nav.toggleClass('add-shadow', $(this).scrollTop() > ($banner.height() - $nav.height()));
    });
  });