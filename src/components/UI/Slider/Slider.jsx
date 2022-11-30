import React from 'react';
import "./Slider.css";

const Slider = ({...props}) => {
    return (
        <div className={'slider-container'}>
            <span className={'slider-label'}>{props.label}</span>
            <label className={"switch"}>
                <input type={"checkbox"}
                       defaultChecked={props.checked}
                       onChange={props.onChange}
                       ref={props.reference}
                />
                <span className={"slider"}/>
            </label>
        </div>
    );
};

export default Slider;