// Home button

import React from 'react'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'


const Power= styled.button `
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);

background-color: #FCF6F4;
padding:0.3rem;
border-radius: 50%;
border: 1px, solid #000;
width: 2.5rem;
height: 2.5rem;

display: flex;
justify-content:center;
align-items: center;
z-index:3;

cursor: pointer;

&: hover{
    background-color: rgba(0,255,0,0.4);
}
`


const PowerButton = () => {
    return (
        <Power>
            <PowerBtn width={30} height={30} fill='currentColor' />
        </Power>
    )
}

export default PowerButton
