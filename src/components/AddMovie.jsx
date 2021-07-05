import React from 'react';
// import PropTypes from 'prop-types';
import InputText from './myComponents/inputAddMovie/InputText';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };

    this.handleState = this.handleState.bind(this);
  }

  handleState(event) {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    const { title } = this.state;
    // const onClick = this.props;

    return (
      <form data-testid="add-movie-form">
        <InputText value={ title } onChange={ this.handleState } />
      </form>
    );
  }
}

// AddMovie.propType = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
