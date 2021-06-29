import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonAdd from './ButtonAdd';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import Genre from './Genre';
import AddRating from './AddRating';

/**
 * Consultei o repositório do Wendell Costa para resolver essa parte.
 * Link: https://github.com/tryber/sd-011-project-movie-cards-library-stateful/pull/174/commits/44b731c7cb8c4d936475d54de1125e003e202a80
 */

class AddMovie extends Component {
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
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({
      [name]: value,
    }));
  }
  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } handleChange={ this.handle } />
        < Subtitle value={ subtitle } handleChange={ this.handleChange } />
        < ImagePath value={ imagePath } handleChange={ this.handleChange } />
        < Storyline value={ storyline } handleChange={ this.handleChange } />
        < AddRating value={ rating } handleChange={ this.handleChange } />
        < Genre value={ genre } handleChange={ this.handleChange } />
        <ButtonAdd resetState={ () => this.resetState(onClick)} />
      </form>
    );
  }
}

export default AddMovie;
