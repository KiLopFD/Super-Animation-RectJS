import { Navigate } from "react-router-dom";
import PrivateRoutes from "../../components/PrivateRoutes";
import { Layout,About,Contact,Courses,Home,Login,Logout,SignUp,DetailCourses, Cpp } from "../../pages";


const Routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "courses",
        element: <Courses/>
      },
      {
        path: "sign-in",
        element: <SignUp />,
      },
      {
        path: "log-in",
        element: <Login />,
      },
      {
        path: "lesson",
        element: <DetailCourses />,
        children: [
          {
            path: "cpp/:cpp_params",
            element: <Cpp/>
          }
        ]
      }
      ,
      {
        element: <PrivateRoutes />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
];

export default Routes;
