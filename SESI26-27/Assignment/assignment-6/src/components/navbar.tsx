import logo from '../logo.svg';

export default function Navbar(): JSX.Element {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} alt="logo" width="40" height="32"></img>Kanban App</a>
                    <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Kanban Board</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <div id="navbar_top" className="nav-scroller bg-body shadow-sm">
                <nav className="nav nav-underline" aria-label="Secondary navigation">
                    <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                    <a className="nav-link" href="#">
                        Friends
                        <span className="badge bg-light text-dark rounded-pill align-text-bottom">27</span>
                    </a>
                    <a className="nav-link" href="#">Explore</a>
                    <a className="nav-link" href="#">Suggestions</a>
                </nav>
            </div> */}
        </>
    )
}
