import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ErrorPage } from "../pages/Error/ErrorPage"
import { ToDoPage } from "../pages/ToDo/ToDoPage"
import { HomePage } from "../pages/Home/HomePage"
import { LoginPage } from "../pages/Login/LoginPage"
import { Layout } from "../layouts/Layout"

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='login' element={<LoginPage />}/>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path='todo' element={<ToDoPage />}/>
          <Route path='todo/:id' element={<ToDoPage />}/>
        </Route>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </Router>
  )
}
