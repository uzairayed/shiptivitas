import React from 'react';
import './Card.css';

export default class Card extends React.Component {
  render() {
    let className = ['Card'], status = [''];
    if (this.props.status === 'backlog') {
      className.push('Card-grey'); status.push('backlog');
    } else if (this.props.status === 'in-progress') {
      className.push('Card-blue'); status.push('process');
    } else if (this.props.status === 'complete') {
      className.push('Card-green'); status.push('complete');
    }
    return (
      <div className={className.join(' ')} data-id={this.props.id} data-status={this.props.status} status={status.join(' ')}>
        <div className="Card-title">{this.props.name}</div>
      </div>
    );
  }
}