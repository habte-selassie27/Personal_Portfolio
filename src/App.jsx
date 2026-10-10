import Canvas from "./components/Canvas.jsx";
import Intro from "./components/Intro.jsx";
import Transition from "./components/Transition.jsx";
import Overlay from "./components/Overlay.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Menu from "./components/Menu.jsx";
import HoverIcon from "./components/HoverIcon.jsx";
import Landing from "./components/Landing.jsx";
import ScrollContainer from "./components/ScrollContainer.jsx";

export default function App() {
    return (
        <>
            {/*Canvas*/}
            <Canvas />

            {/*Intro*/}
            <Intro />

            {/*Loading Container*/}
            <Transition />

            {/*Overlay Container*/}
            <Overlay />

            {/*Sidebar Nav*/}
            <Sidebar />

            {/*Menu*/}
            <Menu />

            {/*Hover Icon*/}
            <HoverIcon />

            {/*Landing Page*/}
            <Landing />

            {/*Scroll Container*/}
            <ScrollContainer />
        </>
    );
}
