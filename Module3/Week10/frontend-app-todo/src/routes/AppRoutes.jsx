import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ErrorPage } from "../pages/Error/ErrorPage"
import { ToDoPage } from "../pages/ToDo/ToDoPage"
import { HomePage } from "../pages/Home/HomePage"
import { LoginPage } from "../pages/Login/LoginPage"
import { Layout } from "../layouts/Layout"
import { PrivateRoutes } from "./PrivateRoutes"

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PrivateRoutes>
                <HomePage />
              </PrivateRoutes>
            }
          />
          <Route
            path="todo"
            element={
              <PrivateRoutes>
                <ToDoPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="todo/:id"
            element={
              <PrivateRoutes>
                <ToDoPage />
              </PrivateRoutes>
            }
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}
