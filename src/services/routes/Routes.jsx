import { Navigate } from "react-router-dom";
import PrivateRoutes from "../../components/PrivateRoutes";
import { Layout, About, Contact, Courses, Home, Login, Logout, SignUp, DetailCourses, Cpp, Exercise, CodeEvaluate, ListProblem, ListQuestions } from "../../pages";


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
        element: <Courses />
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
        path: "/exercise",
        element: <Exercise />,
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            element: <DetailCourses />,
            children: [
              {
                path: "lesson/:_lang/:_params",
                element: <Cpp />
              },
              {
                path: "exercise/:_lang",
                element: <ListProblem />,
                children: [
                  {
                    path:"list-all-questions",
                    element:<ListQuestions/>
                  }
                ]
              },
              {
                path: "code-submit/:_params",
                element: <CodeEvaluate />,
              }
            ]
          }
        ]
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
];

export default Routes;
