import React from 'react';

import atom_gif from '../../../assets/images/atom.gif'

import atom from './atom.module.css'

const Atom = () => {
    return (
        <div className={atom.container} style={{
            backgroundImage: `url(${atom_gif})`
        }}/>
    );
};

export default Atom;