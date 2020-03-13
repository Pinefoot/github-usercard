/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/pinefoot')
  .then (response => {
     let newGitProf = githubContent(response.data);
     wholeThing.append(newGitProf);
     
  });




  //});
  //console.log(response);
//   .catch(error => {
//     console.log('The data was not returned', error);
//  });


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['devjaymoe', 'alanblee', 'mrsimpson3000', 'Perezented', 'MathewHeideman', 'berachele'];

function getThatData (array){
array.forEach(items =>{
  axios.get(`https://api.github.com/users/${items}`)
  .then (response => {
     let newGitProf = githubContent(response.data);
     wholeThing.append(newGitProf);
     
  });
})
  
  
  }

getThatData(followersArray);
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
 //function time.
 function githubContent(data){
  //elements
    const container = document.createElement('div');
    const divTwo = document.createElement('div');
    const containerImg = document.createElement('img');
    const containerTitle = document.createElement('h3');
    const username = document.createElement('p');
    const location = document.createElement('p');
    const profile = document.createElement('p');
    const profileAnchor = document.createElement('a');
    const followers = document.createElement('p');
    const following = document.createElement('p');
    const bio = document.createElement('p');

  //classes
  container.classList.add('card');
  divTwo.classList.add('card-info');
  username.classList.add('username');
  containerTitle.classList.add('name');





  //append
  container.append(containerImg);
  container.append(divTwo);
  divTwo.append(containerTitle);
  divTwo.append(username);
  divTwo.append(location);
  divTwo.append(profile);
  divTwo.append(username);
  divTwo.append(followers);
  divTwo.append(following);
  divTwo.append(bio);
  profile.append(profileAnchor);

//setting of the text content
containerImg.src = data.avatar_url;
containerImg.alt = 'Github Profile Image';
containerTitle.textContent = data.name;
username.textContent = data.login;
location.textContent = `Location: ${data.location}`;
profile.textContent = `Profile: ${data.html_url}`;
profileAnchor.setAttribute ('href', data.html_url);
followers.textContent = `Followers: ${data.followers}`;
following.textContent =  `Following: ${data.following}`;
bio.textContent = `Bio: ${data.bio}`;



  return container;
 }
 const wholeThing  = document.querySelector('.cards');
//  axios.get('https://api.github.com/users/pinefoot')
//  .then(response =>{
//    console.log(`this is the response`, response);
//    cards.append(githubContent(response.data));
//  })
//  .catch(error =>{
//    console.log('something is wrong here', error);
//  });








/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/