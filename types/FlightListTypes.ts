export type Ship = 
  {
    name: string;
    home_port: string;
    image: string;
  }

  export type Launch = {
  id: string;
  launch_success: boolean;
  launch_date_local: string;
  details: string;
  launch_site: {
    site_name: string;
  };
  mission_name: string;
  ships: Ship[];
  links: {
    article_link: string | null;
    video_link: string | null;
    flickr_images: string[],
  },
  rocket: {
    rocket_name: string;
    rocket_type: string;
    first_stage: {
      cores: {
        landing_vehicle: string;
        flight: number;
        land_success: boolean;
        landing_type: string;
        landing_intent: boolean;
        reused: boolean;
      }[]
    },
    second_stage: {
      payloads: {
        id: string | null;
        reused: boolean;
        payload_type: string;
        payload_mass_kg: number | null;
        orbit: string;
        nationality: string;
        manufacturer: string;
        customers: string[];
      }[]
    }
  }
};
