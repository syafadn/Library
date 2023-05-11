import { Link } from "react-router-dom"
import "./style.css"
import { useSelector, useDispatch } from "react-redux";
import { setisLoggedIn } from "../../store/userSlice";
import logo from "../../assets/logo/library.png"
import dashboard from "../../assets/icon/dashboard.png"
import member from "../../assets/icon/member.png"
import book from "../../assets/icon/book.png"
import addmember from "../../assets/icon/add member.png"
import addbook from "../../assets/icon/add book.png"
import user from "../../assets/icon/user.png"

const SideBar = () => {
    const nameUser = useSelector((state) => state.user.user) 
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        dispatch(setisLoggedIn(false));
    }

    return(
        <>
            <div id="app" className="bg-sidebar d-flex" 
            style={{ width: 280, height:"100vh"}}
            >
                <div
                    className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
                >
                    <a
                        href="/"
                        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                    >
                        <img src={logo} alt="image" width="160"/>
                    </a>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link d-flex align-items-center gap-3 text-black" aria-current="page">
                                <img src={dashboard} width="25"/>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/members" className="nav-link d-flex align-items-center gap-2 text-black">
                                <img src={member} width="40"/>
                                Members
                            </Link>
                        </li>
                        <li>
                            <Link to="/books" className="nav-link d-flex align-items-center gap-3 text-black">
                                <img src={book} width="30"/>
                                Books
                            </Link>
                        </li>
                        <li>
                            <Link to="/addmember" className="nav-link d-flex align-items-center gap-3 text-black">
                                <img src={addmember} width="30"/>
                                Add Member
                            </Link>
                        </li>
                        <li>
                            <Link to="/addbook" className="nav-link d-flex align-items-center gap-3 text-black">
                                <img src={addbook} width="30"/>
                                Add Book
                            </Link>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown">
                        <a
                            href="#"
                            className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src={user}
                                alt=""
                                width={32}
                                height={32}
                                className="rounded-circle me-2"
                            />
                            <strong className="text-black">{nameUser}</strong>
                        </a>
                        <ul className="dropdown-menu text-small shadow">
                            <li>
                                <a className="dropdown-item" href="#" onClick={handleLogout}>
                                    Logout
                                    
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar