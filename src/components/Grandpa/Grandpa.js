import React from 'react';
import './Grandpa.css';
import Uncle from '../Uncle/Uncle';
import Father from '../Father/Father'
import Aunty from '../Aunty/Aunty';
const Grandpa = () => {
    const house = 7;
    return (
        <div className='grandpa' >
            <h4>Grandpa</h4>
            <section style={{ display: 'flex' }}>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;