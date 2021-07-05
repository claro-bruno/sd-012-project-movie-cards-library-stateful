// implement AddMovie component here
import React from 'react';
// import PropTypes from 'prop-types';
import Input from './Input';
import TextArea from './TextArea';
import AddMovieInfo from './AddMovieInfo';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      // genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovieInfo
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          handleChange={ this.handleChange }
        />
        <TextArea
          id="textArea-input"
          testIDLabel="storyline-input-label"
          labelContent="Sinopse"
          value={ storyline }
          onChange={ this.handleChange }
          testIDInput="storyline-input"
          name="storyline"
        />
        <Input
          id="rating-input-id"
          dataTestIDLabel="rating-input-label"
          labelContent="Avaliação"
          type="number"
          name="rating"
          value={ rating }
          dataTestIDInput="rating-input"
          onChangeCallback={ this.handleChange }
        />
      </form>
    );
  }
}

/* AddMovie.propTypes = {
  onclick: PropTypes.func.isRequired,
}; */

export default AddMovie;
