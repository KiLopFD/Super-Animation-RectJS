import { lazy, Suspense } from "react";



const Footer = lazy(() => import("./Footer"));
const Header = lazy(() => import("./Header"));
const PrivateRoutes = lazy(() => import("./PrivateRoutes"));
const Sider = lazy(() => import("./Sider"));
const TimeLine = lazy(() => import("./TimeLine"));
const SlideTitle = lazy(() => import("./SlideTitle"));
const SeeMore = lazy(() => import("./SeeMore"));
const CodeMonaCo = lazy(() => import("./CodeMonaCo"));
const SplitBar = lazy(() => import("./SplitBar"));
const CollapseDefault = lazy(() => import("./CollapseDefault"));

export {
    Footer,
    Header,
    PrivateRoutes,
    Sider,
    TimeLine,
    SlideTitle,
    SeeMore,
    CodeMonaCo,
    SplitBar,
    CollapseDefault
}