import React from 'react';
// import PropTypes from 'prop-types';
import InputText from './myComponents/inputAddMovie/InputText';
import InputTextSubtitle from './myComponents/inputAddMovie/InputTextSubtitle';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle } = this.state;
    // const onClick = this.props;

    return (
      <form data-testid="add-movie-form">
        <InputText value={ title } onChange={ this.handleChange } />
        <InputTextSubtitle value={ subtitle } onChange={ this.handleChange } />
      </form>
    );
  }
}

// AddMovie.propType = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
