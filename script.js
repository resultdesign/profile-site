$(function () {
  // ヘッダー
  $('.nav').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5
  },200);
  });
  $('.nav').on('mouseout', function () {
    $(this).animate({
      opacity: 1
    }, 200)
  })
  // $('.nav-pc').hover(
  //   function () {
  //   $(this).animate({opacity: 0.5,}, 100);
  // },
  //   function() {
  //   $(this).animate({opacity: 1.0}, 100)
  // });

  // メイン画像/slick
  $('.carousel').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    pauseOnHover: false,
    cssEase: 'linear'
  });

  // スクロールすると現れるTOPボタン
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#topButton').fadeIn();
    } else {
      $('#topButton').fadeOut();
    }
  });

  // スムーススクロール
  $('a[href^="#"]').click(function () {
    const href = $(this).attr('href');
    const speed = 500;
    let target = $(href == '#' ? 'html' : href);
    const position = target.offset().top;
    $('html,body').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });

  // スクロール時フェードイン
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('section').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass('fadein');
      }
    });
  });

  // モーダル
  $('.works-img').on('click', function () {
    const modalImg = $(this).attr('src');
    $('#modalImg').attr('src', modalImg);
    $('#modal').fadeIn();
    return false
  });

  // モーダル閉じるボタン
  $('#close').on('click', function () {
    $('#modal').fadeOut();
    return false
  });
});