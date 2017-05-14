import React from 'react';

const safeBoards = ["3", "a", "adv", "an", "asp", "biz", "c", "cgl", "ck", "cm", "co", "diy", "fa", "fit", "g", "gd", "his", "int", "jp", "k", "lgbt", "lit", "m", "mlp", "mu", "n", "news", "o", "out", "p", "po", "qa", "qst", "sci", "sp", "tg", "toy", "trv", "tv", "v", "vg", "vip", "vp", "vr", "w", "wsg", "wsr", "x"]

const unsafeBoards = ["aco", "b", "d", "e", "f", "gif", "h", "hc", "hm", "hr", "i", "ic", "pol", "r", "r9k", "s", "s4s", "soc", "t", "trash", "u", "wg", "y"]

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {imageboard: '4chan', board: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  option(board){
    return <option value={board} key={board}>{board}</option> 
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.selectSource(this.state)
  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
      <form>
        <select name='imageboard' value={this.state.imageboard} onChange={this.handleChange}>
          <option value='2ch'>2ch</option>
          <option value='4chan'>4chan</option> 
        </select>
        <select name='board' onChange={this.handleChange}>{safeBoards.map(this.option)}</select>
        <button onClick={this.handleSubmit}>show</button>
      </form>
    )
  }
}

export default Header;