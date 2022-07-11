import Link from "next/Link";
import { useForm } from "react-hook-form";
import swal from "sweetalert2";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="modal-dialog mt-4">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title text-center">Create An Account</h5>
        </div>
        <div className="modal-body">
          <form name="form" id="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control form-control-sm"
                placeholder="username"
                {...register("name", { required: true })}
                //
              />
              <span className="small text-danger">
                {errors.name && <p>Name is required.</p>}
              </span>
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                className="form-control form-control-sm"
                placeholder="enter password"
                // pattern="[A-Za-z0-9]{2,}\s*"
                {...register("password", { required: true })}
              />
              <span className="small text-danger">
                {errors.password && <p>Password is required.</p>}
              </span>
            </div>
            <div className="mb-3">
              <button
                type="submit"
                className="btn btn-sm btn-success btn-block"
              >
                Create Account
              </button>
            </div>
          </form>
          <div className="justify-content-center">
            <p className="card-text align-center small">
              Already Have An Account
              <Link href="/">
                <a className="btn btn-block btn-sm btn-success m-1">Login</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
