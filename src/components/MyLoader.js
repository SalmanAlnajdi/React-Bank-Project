import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
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
    <rect x="92" y="371" rx="0" ry="0" width="198" height="50" />
  </ContentLoader>
);

export default MyLoader;
