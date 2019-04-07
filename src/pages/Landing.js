import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Nav from '../components/Nav';

const Desktop = props => <MediaQuery {...props} minWidth={1281} />;
const Tablet = props => <MediaQuery {...props} minWidth={768} maxWidth={1280} />;
const Mobile = props => <MediaQuery {...props} maxWidth={767} />;

const Backimg = Styled.div`
background: linear-gradient(#5614B0, #1fddff) no-repeat center center fixed;
background-size: cover;
background-attachment: fixed;
width: 100%;
height: 100vh;
display: grid;
grid-template-areas:'NavL NavL' 'Name Name';

`;

const Nameplate = Styled.div`
background-color: #FFFCE4;
height: 50vh;
width: 80vw;
margin: 0 auto;
border-radius: 25px;
grid-area: Name;
text-align: center;
`;

function Landing() {
    return (
        <div>
            <Desktop>
                <Backimg>

                    <Nav className="NavL"/>

                    <Nameplate>
                        Hi my name is daniel crump and welcome to my website
                    </Nameplate>

                </Backimg>


            </Desktop>

            <Tablet>
                <div>You are on a tablet</div>
            </Tablet>

            <Mobile>
                <Backimg>
                <div>You are on a phone</div>
                </Backimg>
            </Mobile>


        </div>
    )
};

export default Landing