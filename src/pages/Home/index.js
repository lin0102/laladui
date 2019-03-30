import React from 'react';
import {Banner} from './Banner';
import Mienshow from './Mienshow'
import './index.css'

export const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Mienshow></Mienshow>
            <footer>@红岩网校工作站</footer>
        </div>
    )
}