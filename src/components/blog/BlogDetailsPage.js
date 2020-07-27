import React from "react";
import myContext from "../context/myContext";
import styles from "./BlogDetails.module.css";
import config from "../../config";
import BlogCarousel from "./blogCarousel/BlogCarousel"

class BlogDetailsPage extends React.Component {
  state = {
    blog: {},
    blogs: [],
    isLoading: false,
    CarouselBlogs: []
  };
  static contextType = myContext;

  fetchBlog = async () => {
    this.setState({ isLoading: true });
    let blog = {};
    let CarouselBlogs = [];
    const blogs = await fetch(
      `${config.API_ENDPOINT}/blogs`,
      {
        method: "Get",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      }
    )
      .then((res) => {
        
        return res.json();
      })
      .then((res) => {
        blog = res.filter(
          (blog) => blog._id === this.props.match.params.blogId
        )
        CarouselBlogs = res.filter(
          (blog) => blog._id !== this.props.match.params.blogId
        )
        return res;
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        console.log(err);
      });
    this.setState({ isLoading: false, blog: blog[0], blogs, CarouselBlogs });
  };

  componentWillMount = async () => {
    if (this.context.blogs.length !== 0) {
      const blog = await this.context.blogs.filter(
        (blog) => blog._id === this.props.match.params.blogId
      );
      const CarouselBlogs = await this.context.blogs.filter(
        (blog) => blog._id !== this.props.match.params.blogId
      );
      
      this.setState({ blog: blog[0], blogs: this.context.blogs, CarouselBlogs });
    } else {
      await this.fetchBlog();
    }
  };

  // componentWillUpdate = async (newProps, newState) => {
  //   console.log(" componentWillUpdate called")
  //   console.log("newProps:", newProps)
  //   console.log("newState:", newState)
  //   console.log("context in componentWillUpdate:", this.context);
    // this.context.blogToShowId = await newProps.match.params.blogId
    // blogToShowId 
  // }

  // componentDidUpdate = async (preProps, preState) => {
  //   console.log(" componentDidUpdate called")
  //   console.log("preProps:", preProps)
  //   console.log("preState:", preState)
  //   console.log("context in componentDidUpdate:", this.context);

    // const blog = await preState.blogs.filter(
    //   (blog) => blog._id === this.context.blogToShowId
    // );
    // this.setState({ blog: blog[0] });
  // }

  render() {
    console.log(this.state);
    return (
      <div className={styles.blog__details_div}>
        <div className={styles.blog__image}>
          <img src={this.state.blog.blogimage} alt="blog" />
        </div>
        <div className={styles.blog__content}>
          <div>
            <h1 className={styles.blog__content_title}>{this.state.blog.title}</h1>
          </div>
          <div className={styles.blog__content_description}>
            <p className={styles.blog__content_description_title_time}>Title</p>
            <p>{this.state.blog.description}</p>
            <p className={styles.blog__content_description_title_time}>Posted on {new Date(this.state.blog.posted).toLocaleTimeString()}</p>
          </div>
          <div><p>{this.state.blog.blogbody}</p></div>
          <BlogCarousel blogs={this.state.CarouselBlogs} />
        </div>
      </div>
    );
  }
}

export default BlogDetailsPage;
