import React from 'react';
import { string, func } from 'prop-types';

class Subtitulo extends React.Component {
  render() {
    const { subtitle, changeTextHandle } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="search" className="col-12">
        Subtítulo
        <input
          className="form-control"
          type="text"
          placeholder="Insira um subtítulo"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ changeTextHandle }
        />
      </label>
    );
  }
}

Subtitulo.propTypes = {
  subtitle: string.isRequired,
  changeTextHandle: func.isRequired,
};

export default Subtitulo;
