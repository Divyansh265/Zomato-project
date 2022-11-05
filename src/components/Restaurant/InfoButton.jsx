import React from 'react'
import classname from "classnames"
const InfoButton = ({ children, ...props }) => {
    return <button
        className={classname(
            'flex items-center gap-3 border border-black px-4 py-2 rounded-lg',
            {
                "bg-zomato-300 text-white border-none": props.isActive,
            }
        )}
    >
        {children}

    </button>
}

export default InfoButton