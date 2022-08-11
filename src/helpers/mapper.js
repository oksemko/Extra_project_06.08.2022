export const mapperMovies = array => {
  return array.map(
    ({ id, title, backdrop_path: image, vote_average: vote }) => ({
      id,
      title,
      image,
      vote,
      watched: false,
    })
  );
};
