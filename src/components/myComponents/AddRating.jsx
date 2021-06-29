import React from 'react';
import PropTypes from 'prop-types';
import FormAddMovie from './FormAddMovie';

class AddRating extends React.Component {
  render() {
    const {
      name,
      callBack,
    } = this.props;
    return (
      <FormAddMovie
        htmlForId="form-rating"
        inputName="rating"
        dataLabelId="rating-input-label"
        labelText="Avaliação"
        dataFormId2="rating-input"
        inputType="number"
        inputValue={ name }
        inputOnChange={ callBack }
      />
    );
  }
}

AddRating.propTypes = {
  name: PropTypes.string,
  callBack: PropTypes.func,
};

AddRating.defaultProps = {
  name: '',
  callBack: '',
};

export default AddRating;
