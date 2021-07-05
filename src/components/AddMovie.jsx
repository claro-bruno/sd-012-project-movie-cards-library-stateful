import React, { Component } from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
import Sinopse from './Sinopse';
import Avaliacao from './Avaliacao';
import Genre from './Genre';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <section>

            <Title
              value={ title }
              onChange={ this.changeHandler }
            />

            <Subtitle
              value={ subtitle }
              onChange={ this.changeHandler }
            />

            <Image
              value={ imagePath }
              onChange={ this.changeHandler }
            />

            <Sinopse
              value={ storyline }
              onChange={ this.changeHandler }
            />

            <Avaliacao
              value={ rating }
              onChange={ this.changeHandler }
            />

            <Genre
              value={ genre }
              onChange={ this.changeHandler }
            />
          </section>
        </form>
      </div>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
export default AddMovie;
