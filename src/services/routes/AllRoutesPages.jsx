import { useRoutes } from "react-router-dom";
import Routes from "./Routes";

const AllRoutesPages = () => {
    const allPages = useRoutes(Routes);
    return allPages
}

export default AllRoutesPages