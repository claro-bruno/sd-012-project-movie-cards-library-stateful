import React from 'react';
import PropTypes from 'prop-types';
import LabelInput from './MyComponents/LabelInput';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.handleSubmit();
    console.log('alguma coisa');
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state);
  }

  render() {
    const { onClick } = this.props;
    const { value } = this.state;
    return (
      <forms data-testid="add-movie-form">
        <LabelInput
          id="include-text"
          dataTestidLabel="title-input-label"
          textLabel="Título"
          type="text"
          value={ value }
          onChange={ this.handleChange }
          dataTestidInput="title-input"
        />
        { onclick }
      </forms>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
