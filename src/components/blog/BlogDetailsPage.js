import React from "react";
import myContext from "../context/myContext";
import styles from "./BlogDetails.module.css";

class BlogDetailsPage extends React.Component {
  state = {
    blog: []
  };
  static contextType = myContext;

  componentWillMount = async () => {
    const blog = await this.context.blogs.filter(
      (blog) => blog._id === this.props.match.params.blogId
    );
    this.setState({blog: blog[0]})
  };
  render() {
    console.log(this.state.blog)
    return (
      <div className={styles.blog__details_div}>
        <h1>{this.state.blog.title}</h1>
      </div>
    );
  }
}

export default BlogDetailsPage;
