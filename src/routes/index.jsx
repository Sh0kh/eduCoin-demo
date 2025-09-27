import Branches from "../pages/Branches";
import DashboardPage from "../pages/DashboardPage";

export const routes = [
    {
        name: 'Home',
        path: '/',
        component: <DashboardPage/>
    },
    {
        name: 'Branches',
        path: '/branches',
        component: <Branches />
    }
]