import React from "react"

import "./Backdrop.css"

interface BackdropProps {
    click: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ click }) => {
    return (
        <div className="backdrop" onClick={click} />
    )
}

export default Backdrop