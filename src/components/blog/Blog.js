import React from "react";
import styles from "./Blog.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogControls from "./blogControls/blogControls";
import config from "../../config";
import { Link } from "react-router-dom";
import myContext from "../context/myContext";

class Blog extends React.Component {
  state = {
    outputType: "all",
    blogs: [],
    blogsToShow: [],
    isLoading: false,
  };

  static contextType = myContext;

  componentWillMount = async () => {
    await this.fetchBlogs();
  };

  fetchBlogs = async () => {
    this.setState({ isLoading: true });
    const blogs = await fetch(`${config.API_ENDPOINT}/blogs`, {
      method: "Get",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        this.context.blogs = res;
        return res;
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        console.log(err);
      });
    this.setState({ isLoading: false, blogs, blogsToShow: blogs });
  };

  changeOutputTypeHandler = (output) => {
    if (output === "all") {
      this.setState({ outputType: "all", blogsToShow: this.state.blogs });
    } else if (output === "code") {
      const codeBlogs = this.state.blogs.filter(
        (blog) => blog.blogtype === "code"
      );
      this.setState({ outputType: "code", blogsToShow: codeBlogs });
    } else {
      const otherBlogs = this.state.blogs.filter(
        (blog) => blog.blogtype === "other"
      );
      this.setState({ outputType: "other", blogsToShow: otherBlogs });
    }
    console.log(this.state);
  };

  render() {
    const content = this.state.blogsToShow.map((blog) => {
      const blogLink = `/blogs/${blog._id}`;
      return (
        <li key={blog._id} className={styles.blog}>
          <Link to={blogLink}>
            <div>
              <img src={blog.blogimage} alt="blog" />
            </div>
          </Link>
          <div className={styles.blogContentDiv}>
            <Link to={blogLink}>
              <h1>{blog.title}</h1>
            </Link>
            <p>{blog.description}</p>
            <p className={styles.posted}>
              Posted on {new Date(blog.posted).toLocaleTimeString()}
            </p>
          </div>
        </li>
      );
    });
    console.log(this.state);
    console.log(this.context);
    return (
      <div className={styles.container}>
        <div className={styles.blogJumbotron}>
          <div className={styles.blogHeaderDiv}>
            <h1 className={styles.blogHeader}>Hello World!</h1>
            <p>Hello! Welcome to my attempt to blogging!!!</p>
          </div>
          <div className={styles.blogProfileImageDiv}>
            <img
              src="blog_profile.jpeg"
              alt="profile"
              className={styles.blogProfileImage}
            />
          </div>
        </div>
        <div className={styles.blogHome}>
          <BlogControls
            activeOutputType={this.state.outputType}
            onChange={this.changeOutputTypeHandler}
          />
          <ul className={styles.blogList}>{content}</ul>
        </div>
      </div>
    );
  }
}

export default Blog;
