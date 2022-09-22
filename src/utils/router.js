
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventDetailPage from "../Pages/EventDetailPage";
import EventPage from "../Pages/EventPage";
import LandingPage from "../Pages/LandingPage";

export const routers = [
    {
        path: "/",
        component: <LandingPage />
    },
    {
        path: "/event",
        component: <EventPage />
    },
    {
        path: "/event/:name",
        component: <EventDetailPage />
    }
]

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                {
                    routers.map(r => (
                        <Route
                            key={r.path}
                            path={r.path}
                            exact
                            element={r.component}
                        />
                    ))
                }
            </Routes>
        </Router>
    )
}