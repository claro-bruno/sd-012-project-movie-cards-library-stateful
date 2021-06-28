import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Consultei o repositório do Wendell Costa para resolver essa parte.
 * Link: https://github.com/tryber/sd-011-project-movie-cards-library-stateful/pull/174/commits/44b731c7cb8c4d936475d54de1125e003e202a80
 */

class AddMovie extends Component {
  constructor (props) {
    super(props)
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    };
    const { onClick } = this.props
  }
  render() {
    const {
        subtitle,
        title,
        imagePath,
        storyline,
        rating,
        genre
    } = this.state
    return <form data-testid="add-movie-form"></form>
  }
}

export default AddMovie;
