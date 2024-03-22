import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>Oops!!</h2>
            {
                error.status === 404 && <div>
                    <h2>
                        Go back, nothing here..
                    </h2>
                    <button><Link to="/">Home</Link></button>
                </div>
            }
        </div>
    );
};

export default ErrorPage;