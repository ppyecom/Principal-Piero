
const getRepos = async() => {
  const url = 'https://api.github.com/users/ppyecom/repos';
  const resp = await fetch(url);
  const data = await resp.json();

  return data;
}

export default getRepos