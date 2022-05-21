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
  rocket: {
    rocket_name: string;
  }
  ships: Ship[];
  links: {
    article_link: string | null;
    video_link: string | null;
    flickr_images: string[],
  },
};
