// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
import Storyline from './Storyline';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.newCard = this.newCard.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  newCard({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { props, state, newCard } = this;
    const { onClick } = props;
    const { title,
      subtitle,
      imagePath,
      storyline } = state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Title title={ title } newCard={ newCard } />
          <Subtitle subtitle={ subtitle } newCard={ newCard } />
          <Image image={ imagePath } newCard={ newCard } />
          <Storyline storyline={ storyline } newCard={ newCard } />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
