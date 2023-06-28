import { lazy, Suspense } from "react";



const Footer = lazy(() => import("./Footer"));
const Header = lazy(() => import("./Header"));
const PrivateRoutes = lazy(() => import("./PrivateRoutes"));
const Sider = lazy(() => import("./Sider"));
const TimeLine = lazy(() => import("./TimeLine"));

export {
    Footer,
    Header,
    PrivateRoutes,
    Sider,
    TimeLine,
}