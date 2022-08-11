import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  handelClickEscape = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handelClickEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handelClickEscape);
  }

  render() {
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img
            src={`https://image.tmdb.org/t/p/w400/${this.props.image}`}
            alt="vmoh"
          />
          <button type="button" onClick={this.props.onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
