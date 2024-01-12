import repositorie from '../../../public/json/repos.json'

const getRepos = async() => {
  const data = repositorie;

  return data;
}

/*
const getRepos = async() => {
  const url = 'https://api.github.com/users/ppyecom/repos';
  const resp = await fetch(url);
  const data = await resp.json();

  return data;
}
*/

export default getRepos