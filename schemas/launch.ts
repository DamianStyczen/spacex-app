import { gql } from "@apollo/client";

const LAUNCH_DETAILS_QUERY = gql`
  query launch($id: ID!) {
    launch(id: $id) {
      mission_name
      details
      launch_success
      launch_date_local
      links {
        article_link
        flickr_images
        video_link
      }
      rocket {
        rocket_name
        rocket_type
        first_stage {
          cores {
            landing_vehicle
            flight
            landing_type
            land_success
            landing_intent
          }
        }
        second_stage {
          payloads {
            id
            reused
            payload_type
            payload_mass_kg
            orbit
            nationality
            manufacturer
            customers
          }
        }
      }
    }
  }
`;

export default LAUNCH_DETAILS_QUERY;