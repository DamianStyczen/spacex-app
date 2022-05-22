import { gql } from "@apollo/client";

export const LAUNCHES_QUERY = gql`
  query launches($limit: Int!, $offset: Int!, $find: String) {
    launches(
      find: { mission_name: $find }
      limit: $limit
      offset: $offset
      sort: "launch_date_local"
      order: "desc"
    ) {
      id
      mission_name
      launch_date_local
      launch_success
      launch_site {
        site_name
      }
      rocket {
        rocket_name
      }
    }
  }
`;

export default LAUNCHES_QUERY;