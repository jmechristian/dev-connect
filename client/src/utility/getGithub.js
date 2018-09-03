const api = {
  clientId: "26c196bacea7db10cf48",
  clientSecret: "0885cb690e07d2a93a6afb0891fb552fd9f7aa53",
  count: 5,
  sort: "created: asc"
};

const getGithub = username =>
  fetch(
    `https://api.github.com/users/${username}/repos?per_page=${
      api.count
    }&sort=${api.sort}&client_id=${api.clientId}&client_secret=${
      api.clientSecret
    }`
  )
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));

export default getGithub;
