import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class TitleSubImg extends React.Component {
  render() {
    const { state, handleChange } = this.props;
    const { title, subtitle, imagePath } = state;
    return (
      <form>
        <Input
          dataIdLabel="title-input-label"
          inpContent="Título"
          inpValue={ title }
          onChangeInp={ handleChange }
          inpName="title"
          inpId="title"
          dataId="title-input"
        />
        <Input
          dataIdLabel="subtitle-input-label"
          inpContent="Subtítulo"
          inpValue={ subtitle }
          onChangeInp={ handleChange }
          inpName="subtitle"
          inpId="subtitle"
          dataId="subtitle-input"
        />
        <Input
          inpContent="Imagem"
          dataIdLabel="image-input-label"
          inpValue={ imagePath }
          onChangeInp={ handleChange }
          inpName="imagePath"
          inpId="image"
          dataId="image-input"
        />
      </form>
    );
  }
}

TitleSubImg.propTypes = {
  state: PropTypes.shape({
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TitleSubImg;
