
const getLanguages = async(nombre) => {
  
    const lenguageJson = `./json/languages/${nombre}.json`;
    const importLengua = await import(lenguageJson);
    const languageObject = importLengua.default;

    return languageObject;
}

/*
const getLanguages = async(lenguajes) => {
  
    const url = lenguajes;
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
}
*/

export default getLanguages