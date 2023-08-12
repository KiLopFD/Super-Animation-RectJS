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
const TabsCustom = lazy(() => import("./TabsCustom"));
const DescriptionProblem = lazy(() => import("./PageCodeSubmit/DescriptionProblem"));
const Reference = lazy(() => import("./PageCodeSubmit/Reference"));
const Solution = lazy(() => import("./PageCodeSubmit/Solution"));
const Submissions = lazy(() => import("./PageCodeSubmit/Submissions"));
const NavSection = lazy(() => import("./PageCodeSubmit/NavSection"));
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
    CodeMonaCo,
    SplitBar,
    CollapseDefault,
    TabsCustom,
    DescriptionProblem,
    Reference,
    Solution,
    Submissions,
    NavSection,
    AvatarUser
}