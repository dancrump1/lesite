import React from 'react';
import Styled from 'styled-components';
import MediaQuery from 'react-responsive';
import Nav from '../components/Nav';
import MountainPic from '../assets/photos/IMG_1661.JPG'

const Desktop = props => <MediaQuery {...props} minWidth={1281} />;
const Tablet = props => <MediaQuery {...props} minWidth={768} maxWidth={1280} />;
const Mobile = props => <MediaQuery {...props} maxWidth={767} />;

const Backimg = Styled.div`
background: linear-gradient(#5614B0, #1fddff) no-repeat center center fixed;
background-size: cover;
background-attachment: fixed;
width: 100%;
height: 100%;
display: grid;
grid-template-areas:'Hea'
 'NamePlate';
grid-template-rows: 1fr 10fr;
grid-gap: 10px;
`;

const Nameplate = Styled.div`
background-color: #FFFCE4;
height: 100vh;
width: 80vw;
margin: 0 auto 50px;
border-radius: 25px;
grid-area: NamePlate;
text-align: center;
overflow: hidden;
object-fit: contain;
`;

const NameplatePic = Styled.img.attrs({ src: MountainPic })`
height: auto;
width: 75%;
transform: rotate(90deg);
margin: 15px;
`;

function Landing() {
    return (
        <div>
            <Desktop>
                <Backimg>

                    <Nav />

                    <Nameplate>
                        <h1>Hi my name is Daniel Crump and welcome to my website</h1>
                        <div style={{ overflow: "hidden" }}>
                            <NameplatePic />
                        </div>
                        <h3>This site is built in React, and is an example of my front end design capabilities!</h3>
                    </Nameplate>

                </Backimg>


            </Desktop>

            <Tablet>
                <div>You are on a tablet</div>

            </Tablet>

            <Mobile>
                <Backimg>
                    <Nameplate>Hi mah nem is dan
                     <br></br>
                        <NameplatePic />
                    </Nameplate>
                </Backimg>
            </Mobile>


        </div>
    )
};

export default Landing