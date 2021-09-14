const searchGif = async keyword => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${keyword}`;
  const response = await fetch(url);
  return response;
};
export { searchGif };
