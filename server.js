const express = require("express");
const app = express();
const port = 5000;
const fs = require("fs");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API RUNNING!");
});

app.post("/api/updateData", (req, res) => {
  try {
    const updatedData = req.body;
    const data = JSON.parse(fs.readFileSync("./src/portfolio.json"));

    for (const [key, value] of Object.entries(updatedData)) {
      // Update fields if they exist in the updated data
      if (value) {
        data[key] = value;
      }
    }

    fs.writeFileSync("./src/portfolio.json", JSON.stringify(data));

    res.sendStatus(200).send("success");
  } catch (error) {
    res.sendStatus(500).send(error);
  }
});

const blogSchema = new mongoose.Schema({
  links: {
    type: [String],
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  blogimage: {
    type: String,
  },
  blogvideo: {
    type: String,
  },
  blogbody: {
    type: String,
  },
  blogtype: {
    type: String,
    enum: ["code", "other"],
    default: "code",
  },
  posted: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

// Get all blogs
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.sendStatus(500).send(error);
  }
});

// Post a new blog
app.post("/api/blog/post", (req, res) => {
  const { title, description, blogimage, blogvideo, blogbody, blogtype } =
    req.body;

  const newBlog = new Blog({
    title,
    description,
    blogimage,
    blogvideo,
    blogbody,
    blogtype,
  });

  newBlog.save().then((blog, err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(blog);
    }
  });
});

// Update a blog by ID
app.put("/api/blog/edit/:id", async (req, res) => {
  console.log("req.params.id", req.params.id);
  console.log("req.body", req.body);
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(blog);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating blog entry");
  }
});

// Delete a blog by ID
app.delete("/api/blog/delete/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndRemove(req.params.id, req.body, {
      new: true,
    });
    res.send(blog);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating blog entry");
  }
});

mongoose.connect(process.env.DB).then(() => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});
