import React from 'react';
import PropTypes from 'prop-types';
import FormAddMovie from './FormAddMovie';

class AddSubtitle extends React.Component {
  render() {
    const {
      name,
      callBack,
    } = this.props;
    return (
      <FormAddMovie
        htmlForId="form-subtitle"
        inputName="subtitle"
        dataLabelId="subtitle-input-label"
        labelText="Subtítulo"
        dataFormId2="subtitle-input"
        inputType="text"
        inputValue={ name }
        inputOnChange={ callBack }
      />
    );
  }
}

AddSubtitle.propTypes = {
  name: PropTypes.string,
  callBack: PropTypes.func,
};

AddSubtitle.defaultProps = {
  name: '',
  callBack: '',
};

export default AddSubtitle;
