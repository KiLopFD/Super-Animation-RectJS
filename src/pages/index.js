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
    Cpp
}