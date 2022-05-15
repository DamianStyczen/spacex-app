export type Ship = 
  {
    name: string;
    home_port: string;
    image: string;
  }

  export type Launch = {
  flight_number: string;
  launch_date_local: string;
  launch_site: {
    site_name_long: string;
  };
  mission_name: string;
  rocket: {
    rocket_name: string;
  }
  ships: Ship[];
};
