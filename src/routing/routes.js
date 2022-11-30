import Tournament from "../components/pages/players/Tournament";
import About from "../components/pages/about/About";
import Login from "../components/pages/login/Login";
import Bracket from "../components/pages/bracket/Bracket";
export const publicRoutes = [
    {path: 'bracket', element: <Bracket/>},
    {path: 'list', element: <Tournament/>},
    {path: 'about', element: <About/>},
    {path: 'login', element: <Login/>},
];