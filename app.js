$(document).ready(function(){
  const $users = ['freecodecamp', 'gumdropstsm', 'bregvids', 'studenalbatroz', 'warcraft'];
  function getData(name){
    let $usersData = [];
    //getJSON is async. You can’t return anything...
    //@ https://forum.jquery.com/topic/return-a-value-from-a-function-using-getjson
    $.getJSON(`https://wind-bow.glitch.me/twitch-api/users/${name}`, function(data) {
      $usersData[0] = data.display_name;
      .done
    });
    $.getJSON(`https://wind-bow.glitch.me/twitch-api/streams/${name}`, function(data) {
      $usersData[1] = data.stream;
      //$usersData[2] = data.stream.channel.status;
    });
    $.getJSON(`https://wind-bow.glitch.me/twitch-api/channels/${name}`, function(data) {
      $usersData[3] = data.logo;
    });
    return renderData($usersData);
  }
  function renderData(usersData){
    /*
    const $template = `      <li class="list-item">
    <img class="stream-logo" src="${usersData[3]}" alt="streamer-logo">
    <a class="stream-name" href="">${usersData[0]}</a>
    <p class="stream-title"></p>
  </li>`;
  */
    console.log(usersData[0]);
    $(".app-container #streamer-list").append('<li>'+usersData[0]+ '</li>');
    return;
  }
  for(let i = 0; i < $users.length; i++){
    getData($users[i]);
  }
});