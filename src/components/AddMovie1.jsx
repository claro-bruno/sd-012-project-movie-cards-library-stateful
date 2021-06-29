import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class AddMovie1 extends React.Component {
  render() {
    const { title, subtitle, imagePath, change, storyline } = this.props;
    return (
      <div>
        <Input
          dataTestidLabel="title-input-label"
          labelText="Título"
          type="text"
          name="title"
          dataTestidInput="title-input"
          value={ title }
          change={ change }
        />
        <Input
          type="text"
          labelText="Subtítulo"
          dataTestidLabel="subtitle-input-label"
          value={ subtitle }
          dataTestidInput="subtitle-input"
          change={ change }
          name="subtitle"
        />
        <Input
          type="text"
          labelText="Imagem"
          dataTestidLabel="image-input-label"
          value={ imagePath }
          dataTestidInput="image-input"
          change={ change }
          name="imagePath"
        />
        <label
          data-testid="storyline-input-label"
          htmlFor="textarea-addmovie"
        >
          Sinopse
          <textarea
            id="textarea-addmovie"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ change }
            name="storyline"
          />
        </label>
      </div>
    );
  }
}

AddMovie1.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
};

export default AddMovie1;
