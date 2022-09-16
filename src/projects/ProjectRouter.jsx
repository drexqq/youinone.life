import { BrowserRouter, Routes, Route } from "react-router-dom";

import Intro from "../components/Intro";
import NotFound from "../components/NotFound"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Memo from "../projects/Memo/Memo"
import TodoList from "../projects/TodoList/Todolist"

function ProjectRouter () {
    return (
        <>
            <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Intro />}></Route>
                    <Route path="/todo" element={<TodoList />}></Route>
                    <Route path="/memo" element={<Memo />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
            </div>
        </>
    )
}

export default ProjectRouter
