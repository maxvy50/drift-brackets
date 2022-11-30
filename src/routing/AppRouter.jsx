import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import Loader from "../components/UI/Loader/Loader";
import {publicRoutes} from "./routes";
import About from "../components/pages/about/About";


const AppRouter = () => {
    const {isUserAuth, isAuthAccepted} = useContext(AuthContext);
    if (!isAuthAccepted) return <Loader/>;
    return (
            <Routes>
                {/*!isUserAuth todo*/}
                {publicRoutes.map(r =>
                    <Route key={r.path}
                           element={r.element}
                           path={r.path}
                    />
                )}
                <Route path="*" element={<About />} replace/>
            </Routes>
    );
};

export default AppRouter;