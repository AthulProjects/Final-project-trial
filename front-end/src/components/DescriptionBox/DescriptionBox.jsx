import React from "react";
import './Description.css'

const DescriptionBox=()=>{
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">
                    Description
                </div>
                <div className="descriptionbox-nav-box fade">
                    Reviews (122)
                    </div>
            </div>
            <div className="descriptionbox-description">
                <p>Description is a description</p>
                <p>aAnother details...</p>
            </div>

        </div>
    )
}
export default DescriptionBox;