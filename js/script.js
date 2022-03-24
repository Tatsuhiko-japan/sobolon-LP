$(function(){


// <!-- ドロワーメニューの利用宣言 -->
  $(document).ready(function() {
  $('.drawer').drawer();
});

//   スムーススクロール //

  
  var scroll = new SmoothScroll('a[href*="#"]', {
    header: '#js-header'
  });


  //wowjs
 new WOW().init()

 //formの入力確認
let $submit = (' #js-submit ')
$(' #js-form input, #js-form textarea').on('change', function() {
  if(
    $( '#js-form input[type="text"]').val() !== "" &&
    $( '#js-form input[type="email"]').val() !== "" &&
    $( '#js-form input[name="entry.154016741"]').prop( 'checked') === true
  ) {
    $submit.addClass ( '-active')
  } else {
    $submit.removeClass( '-active')
  }
  }) 

 //googleform
 let $form = $( '#js-form' )
 $form.submit(function(e) { 
  console.log('ほげほげ'); //クリックイベントが走っているか確認する
  $.ajax({ 
   url: $form.attr('action'), 
   data: $form.serialize(), 
   type: "POST", 
   dataType: "xml", 
   statusCode: { 
      0: function() { 
        //送信に成功したときの処理 
        $form.slideUp()
        $( '#js-success' ).slideDown()
      }, 
      200: function() { 
        //送信に失敗したときの処理 
        $form.slideUp()
        $( '#js-error' ).slideDown()

      }
    } 
  });
  return false; 
  }); 

})