import React from 'react';
import {connect} from "react-redux";
import Cours from "../Cours/Cours";
import s from './Courses.module.css'


const Courses = (props) => {
    debugger;

    let coursElements = props.courses.map((c) => <Cours name={c.name} price={c.price}/>)

    return (
        <div className={s.container}>
            {coursElements}
        </div>
    );
};


let mapStateToProps = (state) => {
    return {
        courses: state.Courses
    }
}


export default connect(mapStateToProps, {})(Courses);