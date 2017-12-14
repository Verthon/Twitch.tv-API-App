const users = ['freecodecamp', 'gumdropstsm', 'bregvids', 'studenalbatroz', 'warcraft'];
  function getData(name){
    let usersData = [];
    let req1 = new XMLHttpRequest;
    req1.open('GET',`https://wind-bow.glitch.me/twitch-api/streams/${name}`);
      usersData[0] = data.display_name;

    //
      //usersData[2] = data.stream.channel.status;
   //https://wind-bow.glitch.me/twitch-api/channels/${name}
      //usersData[3] = data.logo;
    return renderData(usersData);
  }
  function renderData(usersData){
    const template = `      <li class="list-item">
    <img class="stream-logo" src="${usersData[3]}" alt="streamer-logo">
    <a class="stream-name" href="">${usersData[0]}</a>
    <p class="stream-title"></p>
  </li>`;
    console.log(usersData[0]);
    //$(".app-container #streamer-list").append('<li>'+usersData[0]+ '</li>');
    return;
  }
  for(let i = 0; i < users.length; i++){
    getData(users[i]);
  }