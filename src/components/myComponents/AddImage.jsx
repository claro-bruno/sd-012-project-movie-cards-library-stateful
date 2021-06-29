import React from 'react';
import PropTypes from 'prop-types';
import FormAddMovie from './FormAddMovie';

class AddImage extends React.Component {
  render() {
    const {
      name,
      callBack,
    } = this.props;
    return (
      <FormAddMovie
        htmlForId="form-image"
        inputName="imagePath"
        dataLabelId="image-input-label"
        labelText="Imagem"
        dataFormId2="image-input"
        inputType="text"
        inputValue={ name }
        inputOnChange={ callBack }
      />
    );
  }
}

AddImage.propTypes = {
  name: PropTypes.string,
  callBack: PropTypes.func,
};

AddImage.defaultProps = {
  name: '',
  callBack: '',
};

export default AddImage;
