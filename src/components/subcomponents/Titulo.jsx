import React from 'react';
import { string, func } from 'prop-types';

class Titulo extends React.Component {
  render() {
    const { title, changeTextHandle } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="search" className="col-12">
        Título
        <input
          className="form-control"
          type="text"
          placeholder="Insira um título"
          data-testid="title-input"
          value={ title }
          onChange={ changeTextHandle }
        />
      </label>
    );
  }
}

Titulo.propTypes = {
  title: string.isRequired,
  changeTextHandle: func.isRequired,
};

export default Titulo;
