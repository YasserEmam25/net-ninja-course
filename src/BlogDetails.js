import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("Post Deleted");
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <h2>Loading...</h2>}
      {error && <h2>{`Error: ${error}`}</h2>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{"Written by " + blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BlogDetails;
