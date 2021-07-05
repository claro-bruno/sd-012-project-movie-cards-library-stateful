import React from 'react';
import PropType from 'prop-types';
import AddMovie1 from './AddMovie1';
import AddMovie2 from './AddMovie2';
import Button from './Button';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handlechange = this.handlechange.bind(this);
    this.handlechange = this.handleclick.bind(this);

    this.State = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handlechange({ target }) {
    const { inputName, inputValue } = target;
    this.setState({
      [inputName]: inputValue,
    });
  }

  handleclick() {
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
    return (
      <form data-testid="add-movie-form">
        <AddMovie1
          handlechange={ this.handlechange }
          state={ this.state }
        />
        <AddMovie2
          handlechange={ this.handlechange }
          state={ this.state }
        />
        <Button
          handleclick={ this.handleclick }
          dataTestId="send-button"
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropType.func.isRequired,
};

export default AddMovie;
