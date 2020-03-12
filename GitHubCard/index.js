/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/pinefoot')
.then (response => {
 Object.values(response.data)(items =>{
    const newGitProf = githubContent(data);
    cards.append(newGitProf);
  });
  //console.log(response);
})
.catch(error =>{
  console.log('The data was not returned', error);
});

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

const followersArray = [];

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
    const paragraphUsername = document.createElement('p');
    const paragraphLocation = document.createElement('p');
    const paragraphProfile = document.createElement('p');
    const profileAnchor = document.createElement('a');
    const paragraphFollowers = document.createElement('p');
    const paragraphFollowing = document.createElement('p');
    const paragraphBio = document.createElement('p');

  //classes
  container.classList.add('card');
  divTwo.classList.add('card-info');
  paragraphUsername.classList.add('username');
  containerTitle.classList.add('name');





  //append
  container.append(containerImg);
  container.append(divTwo);
  divTwo.append(containerTitle);
  divTwo.append(paragraphUsername);
  divTwo.append(paragraphLocation);
  divTwo.append(paragraphProfile);
  divTwo.append(paragraphUsername);
  divTwo.append(paragraphFollowers);
  divTwo.append(paragraphFollowing);
  divTwo.append(paragraphBio);
  paragraphProfile.append(profileAnchor);

//setting of the text content
containerImg.src = data.avatar_url;
containerImg.alt = 'Github Profile Image';
containerTitle.textContent = data.name;
paragraphUsername.textContent = data.login;
paragraphLocation.textContent = `Location: ${data.location}`;
paragraphProfile.textContent = 'Profile: ';
profileAnchor.href = data.html_url;
paragraphFollowers.textContent = `Followers: ${data.followers}`;
paragraphFollowing.textContent =  `Following: ${data.following}`;
paragraphBio.textContent = `Bio: ${data.bio}`;



  return container;
 }
 const wholeThing  = document.querySelector('.cards');






/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


//potential data.
// {
//   "login": "HuangLiPang",
//     "id": 19566598,
//     "node_id": "MDQ6VXNlcjE5NTY2NTk4",
//     "avatar_url": "https://avatars1.githubusercontent.com/u/19566598?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/HuangLiPang",
//     "html_url": "https://github.com/HuangLiPang",
//     "followers_url": "https://api.github.com/users/HuangLiPang/followers",
//     "following_url": "https://api.github.com/users/HuangLiPang/following{/other_user}",
//     "gists_url": "https://api.github.com/users/HuangLiPang/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/HuangLiPang/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/HuangLiPang/subscriptions",
//     "organizations_url": "https://api.github.com/users/HuangLiPang/orgs",
//     "repos_url": "https://api.github.com/users/HuangLiPang/repos",
//     "events_url": "https://api.github.com/users/HuangLiPang/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/HuangLiPang/received_events",
//     "type": "User",
//     "site_admin": false
//     },
//     {
//       "login": "leachcoding",
//       "id": 42565053,
//       "node_id": "MDQ6VXNlcjQyNTY1MDUz",
//       "avatar_url": "https://avatars3.githubusercontent.com/u/42565053?v=4",
//       "gravatar_id": "",
//       "url": "https://api.github.com/users/leachcoding",
//       "html_url": "https://github.com/leachcoding",
//       "followers_url": "https://api.github.com/users/leachcoding/followers",
//       "following_url": "https://api.github.com/users/leachcoding/following{/other_user}",
//       "gists_url": "https://api.github.com/users/leachcoding/gists{/gist_id}",
//       "starred_url": "https://api.github.com/users/leachcoding/starred{/owner}{/repo}",
//       "subscriptions_url": "https://api.github.com/users/leachcoding/subscriptions",
//       "organizations_url": "https://api.github.com/users/leachcoding/orgs",
//       "repos_url": "https://api.github.com/users/leachcoding/repos",
//       "events_url": "https://api.github.com/users/leachcoding/events{/privacy}",
//       "received_events_url": "https://api.github.com/users/leachcoding/received_events",
//       "type": "User",
//       "site_admin": false
//     },
//     {
//       "login": "dortega5185",
//       "id": 16767688,
//       "node_id": "MDQ6VXNlcjE2NzY3Njg4",
//       "avatar_url": "https://avatars0.githubusercontent.com/u/16767688?v=4",
//       "gravatar_id": "",
//       "url": "https://api.github.com/users/dortega5185",
//       "html_url": "https://github.com/dortega5185",
//       "followers_url": "https://api.github.com/users/dortega5185/followers",
//       "following_url": "https://api.github.com/users/dortega5185/following{/other_user}",
//       "gists_url": "https://api.github.com/users/dortega5185/gists{/gist_id}",
//       "starred_url": "https://api.github.com/users/dortega5185/starred{/owner}{/repo}",
//       "subscriptions_url": "https://api.github.com/users/dortega5185/subscriptions",
//       "organizations_url": "https://api.github.com/users/dortega5185/orgs",
//       "repos_url": "https://api.github.com/users/dortega5185/repos",
//       "events_url": "https://api.github.com/users/dortega5185/events{/privacy}",
//       "received_events_url": "https://api.github.com/users/dortega5185/received_events",
//       "type": "User",
//       "site_admin": false
//     },
//     {
//       "login": "Diddleslip",
//       "id": 52723004,
//       "node_id": "MDQ6VXNlcjUyNzIzMDA0",
//       "avatar_url": "https://avatars1.githubusercontent.com/u/52723004?v=4",
//       "gravatar_id": "",
//       "url": "https://api.github.com/users/Diddleslip",
//       "html_url": "https://github.com/Diddleslip",
//       "followers_url": "https://api.github.com/users/Diddleslip/followers",
//       "following_url": "https://api.github.com/users/Diddleslip/following{/other_user}",
//       "gists_url": "https://api.github.com/users/Diddleslip/gists{/gist_id}",
//       "starred_url": "https://api.github.com/users/Diddleslip/starred{/owner}{/repo}",
//       "subscriptions_url": "https://api.github.com/users/Diddleslip/subscriptions",
//       "organizations_url": "https://api.github.com/users/Diddleslip/orgs",
//       "repos_url": "https://api.github.com/users/Diddleslip/repos",
//       "events_url": "https://api.github.com/users/Diddleslip/events{/privacy}",
//       "received_events_url": "https://api.github.com/users/Diddleslip/received_events",
//       "type": "User",
//       "site_admin": false
//     },
//     {
//       "login": "berachele",
//       "id": 60797556,
//       "node_id": "MDQ6VXNlcjYwNzk3NTU2",
//       "avatar_url": "https://avatars3.githubusercontent.com/u/60797556?v=4",
//       "gravatar_id": "",
//       "url": "https://api.github.com/users/berachele",
//       "html_url": "https://github.com/berachele",
//       "followers_url": "https://api.github.com/users/berachele/followers",
//       "following_url": "https://api.github.com/users/berachele/following{/other_user}",
//       "gists_url": "https://api.github.com/users/berachele/gists{/gist_id}",
//       "starred_url": "https://api.github.com/users/berachele/starred{/owner}{/repo}",
//       "subscriptions_url": "https://api.github.com/users/berachele/subscriptions",
//       "organizations_url": "https://api.github.com/users/berachele/orgs",
//       "repos_url": "https://api.github.com/users/berachele/repos",
//       "events_url": "https://api.github.com/users/berachele/events{/privacy}",
//       "received_events_url": "https://api.github.com/users/berachele/received_events",
//       "type": "User",
//       "site_admin": false
//     }