import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import ReadNext from '../ReadNext';
import ReactDisqusThread from 'react-disqus-comments';
import './style.css';
import '../../static/css/highlight.css';

class SitePost extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;
    console.log(post);
    const home = (
      <div>
        <Link className="gohome" to={prefixLink('/')}>All Articles</Link>
      </div>
    );

    return (
      <div>
        {home}
        <div className="blog-single">
          <div className="text">
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
            <div className="date-published">
              <em>Published {moment(post.date).format('D MMM YYYY')}</em>
            </div>
            <ReactDisqusThread
            				shortname="lukasgrasse-com"
            				identifier={post.path}
            				title={post.title}
            				url={post.path}
            				category_id={post.category}
            				/>
          </div>
          <div className="footer">
            <ReadNext post={post} {...this.props} />
            <hr />
            <p>
              {config.siteDescr}
              <a href={config.siteTwitterUrl}>
                <br /> <strong>{config.siteAuthor}</strong> on Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

SitePost.propTypes = {
  route: React.PropTypes.object.isRequired,
};

export default SitePost;
