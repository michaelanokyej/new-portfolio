import React from "react";
import myContext from "../context/myContext";
import styles from "./BlogDetails.module.css";
// import config from "../../config";
import BlogCarousel from "./blogCarousel/BlogCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faPinterestSquare,
  faTwitterSquare,
  faLinkedin,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import Markdown from "markdown-to-jsx";
import Spinner from "../spinner/Spinner";
import config from "../../config";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

class BlogDetailsPage extends React.Component {
  state = {
    blog: {},
    blogs: [],
    isLoading: false,
    CarouselBlogs: [],
  };
  static contextType = myContext;

  fetchBlog = async () => {
    this.setState({ isLoading: true });
    let blog = {};
    let CarouselBlogs = [];
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
        blog = res.filter(
          (blog) => blog._id === this.props.match.params.blogId
        );
        CarouselBlogs = res.filter(
          (blog) => blog._id !== this.props.match.params.blogId
        );

        return res;
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: `<p>${err}</p>`,
        });
      });

    this.setState({
      isLoading: false,
      blog: blog[0],
      blogs,
      CarouselBlogs,
    });

  };

  componentWillMount = async () => {
    await this.fetchBlog();
  };

  handleBlogChange = async (blogId) => {
    this.setState({ isLoading: true });
    const blog = await this.state.blogs.filter((blog) => blog._id === blogId);
    const CarouselBlogs = await this.state.blogs.filter(
      (blog) => blog._id !== blogId
    );

    this.setState({
      blog: blog[0],
      CarouselBlogs,
      isLoading: false,
    });
  };

  render() {
    const linkTemplate = (links) => {
      if (links.length < 1) {
        return null;
      }
      const liGroup = links.map((link, i) => (
        <li className={styles.blogLink} key={i}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </li>
      ));
      return <ul className={styles.blogLinks}>{liGroup}</ul>;
    };

    const bodyMD = `${this.state.blog.blogbody}`;
    const blogVideo = this.state.blog.blogvideo ? (
      <iframe
        src={this.state.blog.blogvideo}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        width="100%"
        height="250px"
        title="video"
        controls
      />
    ) : null;

    let facebookLink = `https://www.facebook.com/sharer.php?u=${encodeURI(
      document.location.href
    )}`;
    let pinterestLink = `https://pinterest.com/pin/create/bookmarklet/?media=${encodeURI(
      this.state.blog.blogimage
    )}&url=${encodeURI(document.location.href)}&description=${encodeURI(
      "Hi everyone, check out: "
    )}`;
    let twitterLink = `https://twitter.com/share?url=${encodeURI(
      document.location.href
    )}&text=${encodeURI("Hi everyone, check out: ")}`;
    let linkedinLink = `https://www.linkedin.com/shareArticle?url=${encodeURI(
      document.location.href
    )}&title=${encodeURI("Hi everyone, check out: ")}`;
    let whatsappLink = `https://api.whatsapp.com/send?text=${encodeURI(
      "Hi everyone, check out: "
    )} ${encodeURI(document.location.href)}`;
    return this.state.isLoading ? (
      <Spinner />
    ) : (
      <>
        <div className={styles.blog__details_div}>
          <div className={styles.blog__image}>
            <img src={this.state.blog.blogimage} alt="blog" />
          </div>
          <div className={styles.blog__content}>
            <div className={styles.share_btn_container}>
              <a className={styles.facebookIcon} href={facebookLink}>
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
              <a className={styles.pinterestIcon} href={pinterestLink}>
                <FontAwesomeIcon icon={faPinterestSquare} />
              </a>
              <a className={styles.twitterIcon} href={twitterLink}>
                <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
              <a className={styles.linkedinIcon} href={linkedinLink}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a className={styles.whatsappIcon} href={whatsappLink}>
                <FontAwesomeIcon icon={faWhatsappSquare} />
              </a>
            </div>
            <div className={styles.blog__content_Content}>
              <div>
                <h1 className={styles.blog__content_title}>
                  {this.state.blog.title}
                </h1>
              </div>
              <div className={styles.blog__content_description}>
                <p className={styles.blog__content_description_title_time}>
                  Description
                </p>
                <p className={styles.desription_text}>
                  {this.state.blog.description}
                </p>
                <p className={styles.blog__content_description_title_time}>
                  Posted on{" "}
                  {new Date(this.state.blog.posted).toLocaleString()}
                </p>
              </div>
              {blogVideo}
              <div className={styles.blog__content_body}>
                <Markdown children={bodyMD} className={styles.body_MD_Div} />
              </div>
              {linkTemplate(this.state.blog.links)}
              <div className={styles.my_carousel_div}>
                <BlogCarousel
                  blogs={this.state.CarouselBlogs}
                  handleCarouselBlog={this.handleBlogChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="convertful-65087"></div>
      </>
    );
  }
}

export default BlogDetailsPage;
