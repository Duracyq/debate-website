import React from "react";
import './css/Copyright.css';

class Copyright extends React.Component {
    render(){
        const currentYear = new Date().getFullYear();

        return (
            <div className="copyright">
                <p>
                    <span class="material-symbols-outlined">
                        copyright</span>
                    Copyright 2023 - {currentYear}
                </p>
            </div>
        )
    }
}

export default Copyright;