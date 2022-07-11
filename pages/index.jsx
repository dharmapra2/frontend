// import Index from "Index.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import swal from "sweetalert2";
import { useQuery } from "@apollo/client";
import { CHECK_LOGIN } from "../Component/Graphql/schema";

function Login() {
  const [fromData, setFromData] = useState([]);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setFromData(data);
  };
  const { data } = useQuery(CHECK_LOGIN, {
    variables: { name: fromData.name, password: fromData.password },
    onCompleted: (data) => {
      if (data.login) {
        localStorage.setItem("USerID", data.login.userId);
        swal.fire("Success!", "You Succesfully login", "success");
        setFromData([]);
        router.push("/Home");
      } else {
        swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid Cridentials!",
        });
      }
      reset();
    },
    onError: (data) => {
      if (fromData.length !== 0) {
        swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    },
  });

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title text-center">LogIn</h5>
        </div>
        <div className="modal-body">
          <form name="form" id="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control form-control-sm"
                placeholder="Username"
                {...register("name", { required: true })}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                className="form-control form-control-sm"
                placeholder="Password"
                {...register("password", { required: true })}
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
