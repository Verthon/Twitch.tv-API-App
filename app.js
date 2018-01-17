//Users array only 5 chosen
const users = ['freecodecamp', 'gumdropstsm', 'bregvids', 'studenalbatroz', 'warcraft'];
  const get = (url) => {
    return new Promise((resolve, reject) =>{
      const xhttp = new XMLHttpRequest();
      let data = null;
      xhttp.open("GET", url, true);
      xhttp.onload = () => {
        if(xhttp.status === 200){
          resolve(data = JSON.parse(xhttp.response));
        }else{
          reject(xhttp.statusText);
        }
      };
      xhttp.onerror = () => {
        reject(xhttp.statusText);
      };
      xhttp.send();
    });
  }

  let getData = (name) => {
    let streamData = {};
    let addStreamer = (data) =>{
      const template = `
      <li class="list-item">
        <img class="stream-logo" src="${streamData.logo}" alt="streamer-logo">
        <a class="stream-name" href="${streamData.link}">${streamData.name}</a>
        <p class="stream-title">${streamData.name}</p>
      </li>
      `;
      const list = document.getElementById('streamer-list');
      list.innerHTML += template;
      console.log(streamData);
      
    }
    let promise = get(`https://wind-bow.glitch.me/twitch-api/users/${name}`);
    promise.then((data) => {
      streamData.name = data.display_name;
      streamData.logo = data.logo;
      //console.log(streamData.name);
      return get(`https://wind-bow.glitch.me/twitch-api/channels/${name}`);
    }).then((data) => {
      streamData.status = data.status;
      streamData.link = data.url;
      //console.log(data);
      return get(`https://wind-bow.glitch.me/twitch-api/streams/${name}`);
    }).then((data) => {
      //console.log(data);
    }).then((data) => {
      return addStreamer(data);
    }).catch((error) => {
      console.log(error);
    });
  };
  
  /*
  function getData(name){
    let usersData = {};
    let req1 = new XMLHttpRequest;
    req1.open('GET',`https://wind-bow.glitch.me/twitch-api/users/${name}`);
    req1.onload = () => {
      let data = JSON.parse(this.responseText);
      usersData.name = data.display_name;
    }
      //usersData[0] = data.display_name;
    req1.send();
      //usersData[2] = data.stream.channel.status;
   //https://wind-bow.glitch.me/twitch-api/channels/${name}
      //usersData[3] = data.logo;
    return renderData(usersData);
  }
  function renderData(usersData){
    const template = `      <li class="list-item">
    <img class="stream-logo" src="${usersData[3]}" alt="streamer-logo">
    <a class="stream-name" href="">${usersData.name}</a>
    <p class="stream-title"></p>
  </li>`;
    console.log(usersData.name);  
    return;
  }
  */
  users.forEach((user) => getData(user));