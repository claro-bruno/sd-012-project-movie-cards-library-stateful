import React from 'react';
import AddMovieInputTitle from './formComponents/AddMovieInputTitle';
import AddMovieInputSubtitle from './formComponents/AddMovieInputSubtitle';
import AddMovieInputImagePath from './formComponents/AddMovieInputImagePath';
import AddMovieTextarea from './formComponents/AddMovieTextarea';
import AddMovieInputRating from './formComponents/AddMovieInputRating';
import AddMovieSelect from './formComponents/AddMovieSelect';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  submitHandler(e) {
    e.preventDefault();
  }

  render() {
    // const { onClick } = this.props;
    const { rating } = this.state

    return (
      <form data-testid="add-movie-form">

        <AddMovieInputTitle />
        <AddMovieInputSubtitle />
        <AddMovieInputImagePath />
        <AddMovieTextarea />
        <AddMovieInputRating rating={ rating } changeHandler={ this.changeHandler } />
        <AddMovieSelect />

        <button
          // onClick={ onclickHandler }
          data-testid="send-button"
          type="button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}
