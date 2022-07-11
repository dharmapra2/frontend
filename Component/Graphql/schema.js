import { gql } from "@apollo/client";
export const GET_ALL_USER = gql`
  {
    users {
      userId
      name
    }
  }
`;
export const GET_USERS_WITH_POSTS = gql`
  query {
    users {
      userId
      name
      Posts {
        postId
        title
        description
      }
    }
  }
`;
export const GET_POSTS_WITH_USERS = gql`
  query Posts {
    posts {
      postId
      title
      description
      Users {
        userId
        name
      }
    }
  }
`;
export const CHECK_LOGIN = gql`
  query Login($name: String!, $password: String!) {
    login(name: $name, password: $password) {
      userId
    }
  }
`;
export const CREATE_ACCOUNT = gql`
  mutation CreateUser($name: String!, $password: String!) {
    createUser(name: $name, password: $password) {
      userId
    }
  }
`;
