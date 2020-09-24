// -----------------------------------------------
// ハンバーガーメニュー
// -----------------------------------------------

$('.burger-btn').on('click', function(){
  $('.burger-btn').toggleClass('close');
  $('.header-right').fadeToggle(500);//.nav-wrapperがフェードイン
  $('body').toggleClass('noscroll');
});

if( $(window).width() < 768){
  $('.header-nav-item>a').on('click'),function(){
    $('.header-right').fadeOut(500);
    $('.burger-btn').removeClass('close');
    $('body').removeClass('noscroll');
  }
}

// -----------------------------------------------
// トップページに戻るボタン
// -----------------------------------------------
$(function() {
  var topBtn = $('.totop');
  topBtn.hide();
  // スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      topBtn.fadeIn(300);
    } else {
      topBtn.fadeOut(300);
    }
  });
  // スクロールしてトップ
  topBtn.click(function () {
    $('html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});


// $('#language-wrapper').hover( 
//     function() {
//     //ここにホバーされたときの処理を書く
  
//   },
//   function() {
//   //ここにホバーが外れたときの処理を書く

//   }
// );