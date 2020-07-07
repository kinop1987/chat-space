$(function(){
  let last_message_id = $('.MessageBox:last').data("message-id");
  console.log(last_message_id)
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="MessageBox" data-message-id=${message.id}>
          <div class="InfoBox">
            <div class="InfoBox__userName">
              ${message.user_name}
            </div>
            <div class="InfoBox__date">
              ${message.created_at}
            </div>
          </div>
          <div class="Message">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="MessageBox" data-message-id=${message.id}>
        <div class="InfoBox">
          <div class="InfoBox__userName">
            ${message.user_name}
          </div>
          <div class="InfoBox__date">
            ${message.created_at}
          </div>
        </div>
        <div class="Message">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

    $('.Form').on('submit', function(e){
      e.preventDefault();
      let formData = new FormData(this);
      let url = $(this).attr('action');
      $.ajax({
        url: url,
        type: 'POST',
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(data){
        let html = buildHTML(data);
        $('.MainMessage').append(html);
        $('form')[0].reset();
        $('.MainMessage').animate({ scrollTop: $('.MainMessage')[0].scrollHeight});
        $('.Form__submit').prop("disabled", false);
      })
      .fail(function() {
        alert("メッセージ送信に失敗しました");
        $('.Form__submit').prop("disabled", false);
      });
    });
});