const token = "1bc938ce6fefa29db094097833bdc76add9f2952";
fetch("https://api.github.com/user/repos", {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
