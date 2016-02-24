/*global React b:true*/
class Hello extends React.Component {
  constructor() {
    super();
    this._handleClick = this._handleClick.bind(this);
    this.state = {
      say: 'hi'
    };
  }
  render() {
   return <h2 onClick={this._handleClick}>Hello ES6 !!!! </h2>;

  }
  _handleClick() {
    console.log(this.state.say);
  }
}

module.exports = Hello;
