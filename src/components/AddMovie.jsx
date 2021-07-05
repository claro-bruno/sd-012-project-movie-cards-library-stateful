import React from 'react';
import PropType from 'prop-types';
import AddMovie1 from './AddMovie1';
import AddMovie2 from './AddMovie2';
// import Button from './Button';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(e) {
    e.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, rating, storyline, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovie1
          handlechange={ this.handleChange }
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
        />
        <AddMovie2
          handlechange={ this.handleChange }
          rating={ rating }
          storyline={ storyline }
          genre={ genre }
        />
        {/* <Button
          handleclick={ this.handleclick }
          dataTestId="send-button"
        /> */}
        <button
          type="submit"
          onClick={ this.handleClick }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropType.func.isRequired,
};

export default AddMovie;
