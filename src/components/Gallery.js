import React from 'react';
import InfiniteScroll from './InfiniteScroll';
import Page from './Page'
import {loadNext} from '../api'

const imgs = [
  'http://placehold.it/200',
  'http://placehold.it/200x210',
  'http://placehold.it/200x190',
  'http://placehold.it/200x180',
  'http://placehold.it/200x170',
]

const loader = <div className="loader">Loading ...</div>;

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      threads: [],
      hasMoreItems: true
    };
  }
  loadItems(page){
    this.setState(loadNext(this.props.source, this.props.boardCache, page))
  }
  render() {
    
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadItems.bind(this)}
        hasMore={this.state.hasMoreItems}
        loader={loader}>

        <div className="gallery">
          <Page source={this.props.source} threads={this.state.threads} />  
        </div>
      </InfiniteScroll>
    )
  }
}

export default Gallery;