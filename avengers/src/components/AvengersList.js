import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avengers from '../data/avengersData';


const list = () => {
    console.log(avengers);
    return (
        <div>
            {
                avengers.map(avenger => {
                    return (
                        <div>
                            <Link to={`/avengers/${avengers.id}`}>
                            <h3>ID: {avenger.id}</h3>
                            <h1>{avenger.name}</h1>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default list;