import Link from "next/link";
function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link href="/">
        <a className="navbar-brand">Blog App</a>
      </Link>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link href="/Home">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/AddPosts">
              <a className="nav-link">Add Posts</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/users">
              <a className="nav-link">Users</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/">
              <a className="btn btn-danger p-1 m-0">LogOut</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
