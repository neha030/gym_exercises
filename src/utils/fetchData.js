export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e807da2523msh9ce84d02074a698p1f1e5cjsncc6683fc71d6',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  export const YoutubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e807da2523msh9ce84d02074a698p1f1e5cjsncc6683fc71d6',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };


export const fetchData = async (url,options) => {
    const response = await fetch(url,options);
    const data = await response.json(); // used for extracting as we are not using axiox 

    return data ;

}