import React, { Component } from 'react';

class Page extends Component {
  constructor(props) {
    super(props);
  }
  expand(e){
    e.preventDefault()
    // expand button handler
  }
  render() {
    const threads = this.props.threads.map((item)=>{
      return(
        <div key={item.num}>
          
          <div className='op'>
            <img src={`http://t.4cdn.org/${this.props.source.board}/${item.imgs[0]}s.jpg`}/>
            <p>op text</p>
          </div>
          
          <div className='images'>
            {
              this.props.item.imgs.map((img)=>{
                return(
                  <img src={`http://t.4cdn.org/${this.props.source.board}/${img}s.jpg`} alt="Thumbnail"/>
                )
              })
            }
          </div>

          <button onClick={this.expand}>expand</button>
        </div>
      )
    })
    return (
      <div>
        {threads}
      </div>
    );
  }
}

export default Page;