import React from "react"
import PropTypes from "prop-types"

const BodyText = ({children}) => {
    return <div className="font-mono *:pb-4">{children}</div>
}

BodyText.propTypes = {
    children: PropTypes.node.isRequired,
}

export default BodyText