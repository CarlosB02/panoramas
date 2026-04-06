import React from 'react';
import './SidebarWidget.css';

const SidebarWidget = ({ title, children, variant = "default" }) => {
    return (
        <div className={`sidebar-widget variant-${variant}`}>
            <h4 className="widget-title">{title}</h4>
            <div className="widget-content">
                {children}
            </div>
        </div>
    );
};

export default SidebarWidget;
