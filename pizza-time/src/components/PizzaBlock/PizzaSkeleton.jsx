import React from "react"
import ContentLoader from "react-content-loader"

const PizzaSkeleton = (props) => (
    <ContentLoader className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="132" cy="103" r="100" /> 
    <rect x="4" y="214" rx="9" ry="9" width="280" height="27" /> 
    <rect x="2" y="264" rx="8" ry="8" width="280" height="88" /> 
    <rect x="8" y="372" rx="6" ry="6" width="78" height="35" /> 
    <rect x="134" y="367" rx="22" ry="22" width="139" height="45" />
  </ContentLoader>
)

export default PizzaSkeleton
