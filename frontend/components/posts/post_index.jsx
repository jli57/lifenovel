import React from 'react';
import PostItemContainer from './post_item_container';
import CreatePostContainer from './create_post_container';
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
        const options = {
          offset: posts.length,
          limit: 5,
          user_ids: this.props.user_ids
        };
        fetchPosts(options)
          .then(
            null ,
            () => this.setState({ error: true })
          );
      }
    };
  }

  componentDidMount() {
    const { posts, fetchPosts, user_ids } = this.props;
    if ( posts.length < 5 ) {
      fetchPosts({offset: posts.length, limit: 5, user_ids })
      .then( () => this.setState({ isLoading: false }) );
    } else {
      this.setState({isLoading: false});
    }
  }
  render() {
    const { posts } = this.props;

    return (
      <div className="post-index">
        <div>
          <CreatePostContainer />
        </div>
        <BeatLoader
          className="post-loader"
          color={'#3B5998'}
          loading={this.state.isLoading} />
        <div className="posts">
          <h1>Posts</h1>
          <ul className="flex-vert">
            { posts.map( post => (
              <PostItemContainer
                key={ post.id }
                post={ post }
                pageType={ this.props.pageType }
              />)) }
          </ul>
        </div>
      </div>
    );

  }
}
export default PostIndex;
