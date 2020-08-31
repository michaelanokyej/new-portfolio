import React from "react";
import Carousel from "react-elastic-carousel";
import styles from "./BlogCarousel.module.css";
import { Link } from "react-router-dom";

const BlogCarousel = (props) => {
  return (
    <Carousel>
      {props.blogs.map((blog) => {
        const blogLink = `/blogs/${blog._id}`;
        return (
          <div key={blog._id} className={styles.blog__carousel_div}>
            
            <div className={styles.blog__carousel_div_image_div} onClick={(e) => {
                  e.preventDefault();
                  props.handleCarouselBlog(blog._id)}}>
            <Link to={blogLink}>
              <img
                src={blog.blogimage}
                alt="blog"
                className={styles.blog__carousel_div_image}
                
              />
               </Link>
            </div>
            <div className={styles.blog__carousel_div_title}>
              <h5>{blog.title}</h5>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default BlogCarousel;
