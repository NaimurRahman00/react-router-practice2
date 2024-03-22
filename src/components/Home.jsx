import { NavLink, Outlet, useLocation, useNavigation } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "15px",
          border: "1px solid white",
          justifyContent: "center",
          padding: "10px",
          width: "100vh",
          margin: "auto",
        }}
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/posts">All posts</NavLink>
        </li>
      </ul>
      {navigation.state === "loading" ? <p>Loading...</p> : <Outlet></Outlet>}
    </div>
  );
};

export default Home;
