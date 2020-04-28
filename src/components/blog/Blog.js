import React from "react";
import styles from "./Blog.module.css";


class Blog extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.imgDiv}>
          <img
            src="work-in-progress.jpg"
            alt="Work in progress"
            className={styles.workInProgress}
          />
        </div>
      </div>
    );
  }
}

export default Blog;
