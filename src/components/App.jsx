import { Component } from 'react';
import { Button } from './Button/Button';
import { GalleryMovies } from './GalleryMovies/GalleryMovies';
import { Modal } from './Modal/Modal';
import { mapperMovies } from '../helpers/mapper';
import { getFilms } from '../api/apiMovies';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    movies: [],
    image: '',
    page: 1,
    isLoading: false,
    isShow: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { isShow, page } = this.state;
    if (prevState.isShow !== isShow || prevState.page !== page) {
      this.fetchMovies();
    }
  }

  fetchMovies = () => {
    this.setState({ isLoading: true });

    getFilms(this.state.page)
      .then(res => {
        this.setState(prevState => ({
          movies: [...prevState.movies, ...mapperMovies(res.data.results)],
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  showFilms = () => {
    this.setState({ isShow: !this.state.isShow });
  };

  closeModal = () => {
    this.setState({ image: '' });
  };

  counterIncrement = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  setCurrentImage = url => {
    this.setState({ image: url });
  };

  toggleWatched = movieId => {
    this.setState({
      movies: [
        ...this.state.movies.map(({ id, title, image, vote, watched }) =>
          id === movieId
            ? { id, title, image, vote, watched: !watched }
            : { id, title, image, vote, watched }
        ),
      ],
    });
  };

  render() {
    const { isShow, movies, image, isLoading } = this.state;

    return (
      <div>
        {!isShow && <Button text="Show movies" handlerClick={this.showFilms} />}
        {isLoading && <Loader />}
        {movies.length > 0 && (
          <GalleryMovies
            movies={movies}
            setCurrentImage={this.setCurrentImage}
            toggleWatched={this.toggleWatched}
          />
        )}
        {isShow && (
          <Button text="Load more" handlerClick={this.counterIncrement} />
        )}
        {image && <Modal image={image} onClose={this.closeModal} />}
        
      </div>
    );
  }
}
