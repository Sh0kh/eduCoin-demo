import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import NotFoundPage from "./pages/NotFoundPage";
import AdminLayout from "./components/layouts/AdminLayout";
import AppLayout from "./components/layouts/AppLayout";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<AdminLayout />}>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              />
            ))}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;