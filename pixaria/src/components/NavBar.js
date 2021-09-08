import Search from './Search'

const navBar = ({search,query,onLogoClick}) => {
    return (
        <nav className="nav-bar">
            <div className="logo" onClick={()=>onLogoClick}></div>
            <div className="nav-search">
                <Search search={search} query={query} />
            </div>
        </nav>
    )
}

export default navBar
