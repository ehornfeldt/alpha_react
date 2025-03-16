function AlphaView({ title, logIn }) {
    return (
        <div className="alpha">
            <div className="side-menu">
                <div className="logo-place">
                    <img src="./src/assets/alpha-logo.svg" alt="logo" />
                    <p className="logo-text">alpha</p>
                </div>
                <div className="menu">  
                    <img src="./src/assets/project-icon.svg" alt="breefcase icon" />
                    <p className="">Projects</p>
                </div>
            </div>
            <div className="top-menu">
                <div className="search-place">
                    <img src="./src/assets/search-icon.svg" alt="search icon" />
                    <input className="form-control" placeholder="Search anything..." />
                </div>
                <div className="right-menu">
                    <img src="./src/assets/notification-icon.svg" alt="notification icon" />
                    <img src="./src/assets/settings-icon.svg" alt="settings icon" />
                    <div className="avatar-separator" />
                    <img src="./src/assets/avatar-icon.svg" alt="avatar icon" />
                </div>
            </div>
            <div className="main-content">
                <div className="main-area">
                    <div className="header-content">
                        <h2>Projects</h2>
                        <button type="button" className="btn btn-primary add-project-btn">
                            <img src="./src/assets/plus.svg" alt="plus icon" />
                            Add Project
                        </button>
                    </div>
                    <div className="project-menu">
                        <p>ALL[]</p>
                        <p>STARTED[]</p>
                        <p>COMPLETED[]</p>
                    </div>
                    <div className="project-components">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlphaView