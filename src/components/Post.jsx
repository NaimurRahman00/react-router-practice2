import { Link, useNavigate, useParams } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate(-1);
  }
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid black",
        background: "gray",
        color: "black",
      }}
    >
      <h3>{title}</h3>
      <h4>{body}</h4>
      <button style={{ float: "right" }}>
        <Link to={`/posts/${id}`}>Show more</Link>
      </button>
      <button style={{ float: "right" }} onClick={handleShowMore}>Show more</button>
    </div>
  );
};

export default Post;
