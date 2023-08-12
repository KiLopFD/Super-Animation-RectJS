import { Navigate } from "react-router-dom";
import PrivateRoutes from "../../components/PrivateRoutes";
import { Layout, About, Contact, Courses, Home, Login, Logout, SignUp, DetailCourses, Cpp, Exercise, CodeEvaluate, ListProblem, ListQuestions } from "../../pages";
import { DescriptionProblem, Reference, Solution, Submissions } from "../../components";


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
        path: "sign-up",
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
              // lesson
              {
                path: "lesson/:_lang/:_params",
                element: <Cpp />
              },
              // problem exercise
              // {
              //   path: "exercise/:_lang",
              //   element: <ListProblem />,
              //   children: [
              //     {
              //       path:"list-all-questions",
              //       element:<ListQuestions/>
              //     }
              //   ]
              // },
              // {
              //   path: "code-submit/:_categories/:_params",
              //   element: <CodeEvaluate />,
              //   children:[
              //     {
              //       path:"description",
              //       element: <DescriptionProblem />
              //     },
              //     {
              //       path:"reference",
              //       element: <Reference />
              //     },
              //     {
              //       path:"solution",
              //       element: <Solution />
              //     },
              //     {
              //       path:"submissions",
              //       element: <Submissions />
              //     },
              //   ]
              // }
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
