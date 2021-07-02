import React from 'react';
import PropTypes from 'prop-types';
import FormAddRating from './formAddRating';

class AddRating extends React.Component {
  render() {
    const {
      name,
      callBack,
    } = this.props;
    return (
      <FormAddRating
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
  name: PropTypes.number,
  callBack: PropTypes.func,
};

AddRating.defaultProps = {
  name: '0',
  callBack: PropTypes.func,
};

export default AddRating;
