import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="139" cy="117" r="113" /> 
    <rect x="0" y="247" rx="10" ry="10" width="280" height="25" /> 
    <rect x="0" y="288" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="395" rx="10" ry="10" width="71" height="27" /> 
    <rect x="128" y="387" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton

