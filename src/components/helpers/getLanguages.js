
const getLanguages = async(lenguajes) => {
  
    const url = lenguajes;
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
}

export default getLanguages