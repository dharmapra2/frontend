// import Index from "Index.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import swal from "sweetalert2";
import { useQuery } from "@apollo/client";
import { GET_POSTS_WITH_USERS } from "../../Component/Graphql/schema";
function index() {
  const { loading, error, data } = useQuery(GET_POSTS_WITH_USERS);
  let html = "";
  if (data) {
    console.log(data.posts);
    html = data.posts.map((data) => {
      return (
        <div className="col-xs-4 mt-1" key={data.postId}>
          <div className="card">
            <div className="card-header">Title : {data.title}</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{data.description}</p>
                <footer className="blockquote-footer">
                  <cite title="Source Title">{data.Users.name}</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      );
    });
  } else {
    html = (
      <div className="card">
        <div className="card-header">No Post is posted</div>
      </div>
    );
  }
  return (
    <>
      <div className="row mt-4 container-fluid">{html}</div>
    </>
  );
}

export default index;
