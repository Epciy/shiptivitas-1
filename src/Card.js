import React from 'react';
import './Card.css';


export default class Card extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.updateCardColor();
    }
  }

  componentDidMount() {
    this.updateCardColor();
  }

  updateCardColor() {
    console.log('Updating card color for:', this.props.name, 'Status:', this.props.status);
    let className = ['Card'];
    if (this.props.status === 'backlog') {
      className.push('Card-grey');
    } else if (this.props.status === 'in-progress') {
      className.push('Card-blue');
    } else if (this.props.status === 'complete') {
      className.push('Card-green');
    }

    this.cardElement.className = className.join(' ');
  }

  render() {
    return (
      <div
        ref={(element) => (this.cardElement = element)}
        data-id={this.props.id}
        data-status={this.props.status}
      >
        <div className="Card-title">{this.props.name}</div>
      </div>
    );
  }
}



/*
export default class Card extends React.Component {
  render() {
    let className = ['Card'];
    if (this.props.status === 'backlog') {
      className.push('Card-grey');
    } else if (this.props.status === 'in-progress') {
      className.push('Card-blue');
    } else if (this.props.status === 'complete') {
      className.push('Card-green');
    }
    
    return (
      <div className={className.join(' ')} data-id={this.props.id} data-status={this.props.status}>
        <div className="Card-title">{this.props.name}</div>
      </div>
    );
  }
}

*/