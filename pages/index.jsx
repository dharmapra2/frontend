// import Index from "Index.module.css";
import Link from "next/link";
import swal from "sweetalert2";
function Login() {
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title text-center">LogIn</h5>
        </div>
        <div className="modal-body">
          <form name="form" id="form">
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control form-control-sm"
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                className="form-control form-control-sm"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="submit"
                className="btn btn-block btn-sm btn-success"
                value="Sign in"
              />
            </div>
          </form>
          <div className="justify-content-center">
            <p className="card-text align-center small">
              Don't Have Any Account
            </p>

            <div className="mb-3">
              <Link href="/Signup">
                <a className="btn btn-block btn-sm btn-success m-1">
                  Creat New Account
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
