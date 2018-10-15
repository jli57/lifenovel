import React from 'react';
import PostIndexItem from './post_index_item';
import CreatePostContainer from './create_post_container';
import { Route } from 'react-router-dom';

import { BeatLoader } from 'react-spinners';

class PostIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      hasMore: true,
      isLoading: true
    };

    window.onscroll = () => {
      const {
        props: {
          fetchPosts,
          posts,
        },
        state: {
          error,
          hasMore,
          isLoading,
        },
      } = this;

      // console.log("inner height", window.innerHeight);
      // console.log("scroll Top", document.documentElement.scrollTop);
      // console.log("total", window.innerHeight + document.documentElement.scrollTop);
      // console.log("off set", document.documentElement.offsetHeight );
      if ( error || isLoading || !hasMore ) return;

      if (
        window.innerHeight + document.documentElement.scrollTop
          >= document.documentElement.offsetHeight
      ) {
        fetchPosts( posts.length, 5)
          .then(
            null ,
            () => this.setState({ error: true })
          );
      }
    };
  }

  componentDidMount() {
    this.props.fetchPosts(0, 5)
      .then( () => this.setState({ isLoading: false }) );
  }

  render() {
    const { posts, currentUser, openModal } = this.props;

    return (
      <div className="post-index">
        <div>
          <Route exact path="/" component={ CreatePostContainer } />
          <Route exact path="/:userId" component={ CreatePostContainer } />
        </div>
        <BeatLoader
          className="post-loader"
          color={'#3B5998'}
          loading={this.state.isLoading} />
        <div className="posts">
          <h1>Posts</h1>
          <ul className="flex-vert">
            { posts.map( post => (
              <PostIndexItem
                key={ post.id }
                post={ post }
                currentUser={ currentUser }
                openModal={ openModal }
                />)) }
          </ul>
        </div>
      </div>
    );

  }
}


export default PostIndex;
