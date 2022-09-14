import React, { useEffect, useState } from "react";
import axios from "axios";
import LaunchCard from "./LaunchCard";
import Search from "../SearchBox/Search";

const LaunchList = () => {
  const [launchData, setLaunchData] = useState([]);
  const [searchValue, setSearchValue] = useState();

  // API Call
  useEffect(() => {
    axios.get(`https://api.spacexdata.com/v4/launches/`).then((res) => {
      if (res.status === 200) {
        setLaunchData(res.data);
        // console.log(res.data.results);
      }
    });
  }, []);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <Search onChange={handleSearch} />
      <div className="container flex mx-auto mt-4 mb-10">
        <div className="w-full border bg-white p-4 px-10">
          {/* cards here */}
          <div className="grid gap-y-4">
            {launchData.map((item) => (
              <LaunchCard
                key={item.id}
                name={item.name}
                patch_image={item.links.patch.small}
                flight_number={item.flight_number}
                date_local={item.date_local}
                details={item.details ? item.details : "N/A"}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LaunchList;
