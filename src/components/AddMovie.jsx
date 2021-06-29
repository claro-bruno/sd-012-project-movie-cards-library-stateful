// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
import Storyline from './Storyline';
import NewRating from './NewRating';
import Genre from './Genre';
import BttnForm from './BttnForm';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.newCard = this.newCard.bind(this);
    this.buttonForm = this.buttonForm.bind(this);

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

  buttonForm() {
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
    const { state, newCard, buttonForm } = this;
    const { onClick } = this.props;
    const { title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre } = state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Title title={ title } newCard={ newCard } />
          <Subtitle subtitle={ subtitle } newCard={ newCard } />
          <Image image={ imagePath } newCard={ newCard } />
          <Storyline storyline={ storyline } newCard={ newCard } />
          <NewRating rating={ rating } newCard={ newCard } />
          <Genre genre={ genre } newCard={ newCard } />
          <BttnForm button={ buttonForm } outro={ onClick } />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
