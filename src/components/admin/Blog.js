import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import "./Admin.css";

const labelStyle =
  "w-40 text-left mb-0 text-lg font-medium text-gray-900 dark:text-white";
const textInputStyle =
  "bg-gray-50 border border-gray-300 w-2/3 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
const labelTextInputWrapper = "flex items-center my-2 ";

export default function Blog() {
  const [blogs, setBlogs] = useState();

  const [addBlog, setAddBlog] = useState({
    title: "",
    description: "",
    blogimage: "",
    blogvideo: "",
    blogbody: "",
    blogtype: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.log(err));
  }, []);

  const updatePost = (blog) => {
    try {
      fetch(`http://localhost:5000/api/blog/edit/${blog._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      })
        .then((response) => {
          if (response.ok) {
            alert("Blog updated successfully.");
          } else {
            alert("Error saving data.");
          }
          return response;
        })
        .then((result) => console.log(result));
    } catch (err) {
      console.log(err);
    }
  };

  const deletePost = (blog) => {
    try {
      fetch(`http://localhost:5000/api/blog/delete/${blog._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      })
        .then((response) => {
          if (response.ok) {
            alert("Blog deleted successfully.");
          } else {
            alert("Error saving data.");
          }
          return response;
        })
        .then((result) => console.log(result));
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeAdd = (event) => {
    let { name, value } = event.target;
    if (name.includes("blogtype")) {
      name = "blogtype";
    }
    setAddBlog((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChangeEdit = (event, index) => {
    let { name, value } = event.target;
    if (name.includes("blogtype")) {
      name = "blogtype";
    }
    setBlogs((prevState) => {
      const updatedBlogs = [...prevState];
      updatedBlogs[index] = {
        ...updatedBlogs[index],
        [name]: value,
      };
      return updatedBlogs;
    });
  };

  // Blog
  const postBlog = (e) => {
    e.preventDefault();

    if (addBlog.blogtype.length) {
      fetch("http://localhost:5000/api/blog/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addBlog),
      })
        .then((response) => {
          console.log(response.status);
          if (response.ok) {
            alert("Blog posted successfully.");
            window.location.reload();
          } else {
            alert("Error posting blog.");
          }
          return response;
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    } else {
      alert("Fill in the required fields.");
    }
  };

  return (
    <div className="admin-page">
      <div>
        <h1 className="text-white w-fit mt-10 mb-3">Add a Blog</h1>
        <div className={labelTextInputWrapper}>
          <label className={labelStyle}>Title</label>
          <input
            className={textInputStyle}
            type="text"
            name="title"
            value={addBlog.title}
            onChange={handleChangeAdd}
          />
        </div>
        <div className={labelTextInputWrapper}>
          <label className={labelStyle}>Description</label>
          <textarea
            name="description"
            className={textInputStyle}
            value={addBlog.description}
            onChange={handleChangeAdd}
          />
        </div>
        <div className={labelTextInputWrapper}>
          <label className={labelStyle}>Image URL</label>
          <input
            className={textInputStyle}
            type="text"
            name="blogimage"
            value={addBlog.blogimage}
            onChange={handleChangeAdd}
          />
        </div>
        <div className={labelTextInputWrapper}>
          <label className={labelStyle}>Video URL</label>
          <input
            className={textInputStyle}
            type="text"
            name="blogvideo"
            value={addBlog.blogvideo}
            onChange={handleChangeAdd}
          />
        </div>
        <div className={labelTextInputWrapper}>
          <label className={labelStyle}>Body</label>
          <MDEditor
            value={addBlog.blogbody}
            onChange={(val) =>
              handleChangeAdd({ target: { name: "blogbody", value: val } })
            }
          />
        </div>
        <div className={labelTextInputWrapper} onChange={handleChangeAdd}>
          <label className={labelStyle}>Blog Type</label>
          <div className="flex m-2 items-center">
            <input
              // className={textInputStyle}
              type="radio"
              name="addblogtype"
              value="code"
              // checked={true}
            />
            <p className="text-white m-0 ml-1">Code Stories</p>
          </div>
          <div className="flex m-2 items-center">
            <input
              // className={textInputStyle}
              type="radio"
              name="addblogtype"
              value="other"
            />
            <p className="text-white m-0 ml-1">Other Stories</p>
            <p className="text-gray-500 m-0 ml-1">(required)</p>
          </div>
        </div>
        <button onClick={postBlog}>Post blog</button>
      </div>
      <div className="pb-20">
        <h1 className="text-white w-fit mt-10 mb-3">Edit Blogs</h1>
        {blogs ? (
          <div id="accordionExample">
            {blogs.map((blog, index) => (
              <div key= {index} class="rounded-t-lg bg-slate-800 mb-2" >
                <h2 class="mb-0">
                  <div
                    class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-slate-600 py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] hover:bg-slate-600 focus:z-[3] focus:outline-none dark:text-white [&:not([data-te-collapse-collapsed])]:bg-slate-700 [&:not([data-te-collapse-collapsed])] [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-slate-700 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                    type="button"
                    data-te-collapse-init
                    data-te-collapse-collapsed
                    data-te-target={"#collapse" + index}
                    aria-expanded="true"
                    aria-controls={"collapse" + index}
                  >
                    {blog.title}
                    <span class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </div>
                </h2>
                <div
                  id={"collapse" + index}
                  class="!visible hidden"
                  data-te-collapse-item
                  data-te-parent="#accordionExample"
                >
                  <div
                    key={blog._id}
                    className="p-2 pl-5 dark:bg-slate-700 rounded-lg ring-1 ring-slate-900/5 shadow-xl"
                  >
                    <div className={labelTextInputWrapper}>
                      <label className={labelStyle}>Title</label>
                      <input
                        className={textInputStyle}
                        type="text"
                        name="title"
                        value={blog.title}
                        onChange={(event) => handleChangeEdit(event, index)}
                      />
                    </div>
                    <div className={labelTextInputWrapper}>
                      <label className={labelStyle}>Description</label>
                      <input
                        className={textInputStyle}
                        type="text"
                        name="description"
                        value={blog.description}
                        onChange={(event) => handleChangeEdit(event, index)}
                      />
                    </div>
                    <div className={labelTextInputWrapper}>
                      <label className={labelStyle}>Blog image</label>
                      <input
                        className={textInputStyle}
                        type="text"
                        name="blogimage"
                        value={blog.blogimage}
                        onChange={(event) => handleChangeEdit(event, index)}
                      />
                    </div>
                    <div className={labelTextInputWrapper}>
                      <label className={labelStyle}>Blog Video</label>
                      <input
                        className={textInputStyle}
                        type="text"
                        name="blogvideo"
                        value={blog.blogvideo}
                        onChange={(event) => handleChangeEdit(event, index)}
                      />
                    </div>
                    <div className={labelTextInputWrapper}>
                      <label className={labelStyle}>Body</label>
                      <div className="w-8/12">
                        <MDEditor
                          value={blog.blogbody}
                          onChange={(val) =>
                            handleChangeEdit(
                              { target: { name: "blogbody", value: val } },
                              index
                            )
                          }
                        />
                      </div>
                    </div>
                    <div
                      className={labelTextInputWrapper}
                      onChange={(event) => handleChangeEdit(event, index)}
                    >
                      {/* <label className={labelStyle}>Blog Type</label>
                <input
                  className={textInputStyle}
                  type="text"
                  name="blogtype"
                  value={blog.blogtype}
                  onChange={(event) => handleChangeEdit(event, index)}
                /> */}

                      <div className="flex m-2 items-center">
                        <input
                          type="radio"
                          name={"editblogtype" + index}
                          value="code"
                          checked={blog.blogtype === "code"}
                        />
                        <p className="text-white m-0 ml-1">Code Stories</p>
                      </div>
                      <div className="flex m-2 items-center">
                        <input
                          type="radio"
                          name={"editblogtype" + index}
                          value="other"
                          checked={blog.blogtype === "other"}
                        />
                        <p className="text-white m-0 ml-1">Other Stories</p>
                      </div>
                    </div>
                    <button onClick={() => updatePost(blog)}>Save Edit</button>
                    <button onClick={() => deletePost(blog)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h3 className="pb-60">Fetching Blogs...</h3>
        )}
      </div>
    </div>
  );
}
