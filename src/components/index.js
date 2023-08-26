import { lazy, Suspense } from "react";



const Footer = lazy(() => import("./Footer"));
const Header = lazy(() => import("./Header"));
const PrivateRoutes = lazy(() => import("./PrivateRoutes"));
const Sider = lazy(() => import("./Sider"));
const TimeLine = lazy(() => import("./TimeLine"));
const SlideTitle = lazy(() => import("./SlideTitle"));
const SeeMore = lazy(() => import("./SeeMore"));

const AvatarUser = lazy(() => import("./AvatarUser"));
const DropDown = lazy(() => import("./DropDown"));

export {
    Footer,
    Header,
    PrivateRoutes,
    Sider,
    TimeLine,
    SlideTitle,
    SeeMore,
    AvatarUser
}