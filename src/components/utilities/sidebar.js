import React from "react";

const Sidebar = ({ children, duration, state }) => {
    const defaultStyle = {
        transition: `transform ${duration}ms ease-in-out`,
        transform: "translateX(101%)"
    };

    const transitionStyles = {
        entering: { transform: "translateX(101%)" },
        entered: { transform: "translateX(0)" }
    };
    return (
        <div
            className="sidebar"
            style={{
                ...defaultStyle,
                ...transitionStyles[state]
            }}
        >
            {children}
        </div>
    );
};

export default Sidebar;
