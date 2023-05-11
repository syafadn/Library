import SideBar from "../SideBar/SideBar"
import Dashboard from "../Dashboard/Dashboard"
import Members from "../Members/Members"
import Books from "../Books/Books"
import FormMember from "../Form/FormMember"
import { Routes, Route, Link } from "react-router-dom"
import FormBook from "../Form/FormBook"
import Detail from "../Detail/Detail"
import "../Layout/stylelayout.css"
import FormEdit from "../Form/FormEdit"

const Layout = () => {
    return(
        <>
            <div>

                <div className="col-3 position-fixed">
                    <SideBar />
                </div>

                <div className="col offset-3">
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/members" element={<Members />} />
                        <Route path="/books" element={<Books />} />
                        <Route path="/addmember" element={<FormMember />} />
                        <Route path="/addbook" element={<FormBook />} />
                        <Route path="/detail" element={<Detail />} />
                        <Route path="/edit" element={<FormEdit />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default Layout