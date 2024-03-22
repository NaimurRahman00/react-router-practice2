import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <ul style={{listStyle: 'none', display: 'flex', gap: '15px', border: '1px solid white', justifyContent: 'center', padding: '10px', width: '100vh', margin: 'auto'}}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/posts">All posts</Link>
                </li>
            </ul>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;