import React from "react";
import ContentLoader from "react-content-loader";

const ProfileLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="186" cy="154" r="80" />
    <rect x="69" y="261" rx="0" ry="0" width="258" height="21" />
    <rect x="48" y="317" rx="0" ry="0" width="302" height="24" />
    <rect x="49" y="361" rx="0" ry="0" width="298" height="50" />
    <rect x="109" y="427" rx="0" ry="0" width="167" height="40" />
  </ContentLoader>
);

export default ProfileLoader;
