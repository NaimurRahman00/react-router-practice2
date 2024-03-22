import { useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  console.log(details);
  const {id, title, body} = details;
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid black",
        background: "gray",
        color: "black",
      }}
    >
      <h3>Id: {id}</h3>
      <h4>{title}</h4>
      <h5>{body}</h5>
    </div>
  );
};

export default Details;
