import React from "react"
import ContentLoader from "react-content-loader"

const TransactionLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={476}
    height={124}
    viewBox="0 0 476 124"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="21" y="75" rx="0" ry="0" width="117" height="21" /> 
    <rect x="194" y="77" rx="0" ry="0" width="109" height="20" /> 
    <rect x="353" y="75" rx="0" ry="0" width="109" height="20" />
  </ContentLoader>
)

export default TransactionLoader

