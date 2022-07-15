import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2 className="title">{title}</h2>
      {blogs.map((blog) => (
        <Link to={`/blog/${blog.id}`}>
          <div className="blog" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{"Written by " + blog.author}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
