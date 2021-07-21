import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.onChangeSubTitle = this.onChangeSubTitle.bind(this);
  }

  onChangeHandle({ target }) {
    const { value } = target;

    this.setState({
      title: value,
    });
  }

  onChangeSubTitle({ target }) {
    const { value } = target;

    this.setState({
      subtitle: value,
    });
  }

  render() {
    const { title } = this.state;
    const { subtitle } = this.state;
    console.log(subtitle);
    return (
      <form data-testid="add-movie-form">
        <div htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            id="title-input"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.onChangeHandle }
          />
        </div>
        <div htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle-input"
            name="subtitle"
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.onChangeSubTitle }
          />
        </div>
      </form>
    );
  }
}

export default AddMovie;
