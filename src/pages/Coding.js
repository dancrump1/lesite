import React from 'react';
import Styled from 'styled-components';
import Nav from '../components/Nav';

const Backimg = Styled.div`
background-image: linear-gradient(#5614B0, #1fddff);
background-attachment: fixed;
width: 100%;
height: 100vh;
`;

const SiteGrid = Styled.div`
display: grid;
grid-template-areas: 
'Nav Nav Nav'
'E2 E2 E2'
'E3 E3 E3'
'E4 E4 E4';
grid-template-columns: 1fr 1fr 3fr;
grid-gap: 60px;
`;

const E2 = Styled.div`
grid-area: E2;
text-align: center;
`;
const E3 = Styled.div`
grid-area: E3;
text-align: center;
`;
const E4 = Styled.div`
grid-area: E4;
text-align: center;
background: yellow;
`;



function CodingP() {
    return (
        <div>
            <Backimg>
                <SiteGrid>
                <Nav />
                <E2>Github or something</E2>
                <E3>CodePen or something</E3>
                <E4>Links to all current projects</E4>
                </SiteGrid>
            </Backimg>
        </div>
    )
}

export default CodingP;