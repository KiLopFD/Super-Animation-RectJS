import { lazy } from "react";
import Layout from "./Layout";


const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const Courses = lazy(() => import("./Courses"));
const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./Login"));
const Logout = lazy(() => import("./Logout"));
const SignUp = lazy(() => import("./SignUp"));
const DetailCourses = lazy(() => import("./DetailCourses"));
const Cpp = lazy(()=> import("./DetailCourses/Cpp"))
const Exercise = lazy(()=> import("./Exercise"))
const CodeEvaluate = lazy(()=> import("./CodeEvaluate"))
const ListProblem = lazy(()=> import("./ListProblem"))
const ListQuestions = lazy(()=> import("./ListQuestions"))

export {
    About,
    Contact,
    Courses,
    Home,
    Login,
    Logout,
    SignUp,
    Layout,
    DetailCourses,
    Cpp,
    Exercise,
    CodeEvaluate,
    ListProblem,
    ListQuestions
}

