import React from 'react';
import bkgrnd2 from "../assets/photos/codescreenshot.JPG"
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

const Desktop = props => <MediaQuery { ...props } minWidth={ 1281 } />;
const Tablet = props => <MediaQuery { ...props } minWidth={ 768 } maxWidth={ 1280 } />;
const Mobile = props => <MediaQuery { ...props } maxWidth={ 767 } />;

const Backimg2 = Styled.div`
background-image: url(${bkgrnd2});
background-repeat: no-repeat;
background-size: cover;
background-position: top;
width: 100%;
height: 100vh;
`;


const LandingPBButton = Styled.div`
color: white;
margin-top: 9.37%;
margin-left: 24.38%;
font-size: 1vw;
font-weight: bold;
`;

const LandingYTButton = Styled.div`
color: white;
margin-left: 24.38%;
font-size: 1vw;
font-weight: bold;
`;


function Landing() {
    console.log("Click on the words 'Paintball', 'YouTube/Twitch' or 'Coding' to navigate from this page to the rest of the site.")
    return (
        <div style={ { display: "flex" } }>
            <Desktop>

                <Backimg2>

                    <LandingPBButton style={ { color: "#b18dbcbd" } }>import <Link style={ { color: "#95b4da", textDecoration: "none" } } to="/paintball">Paintball</Link> from <p style={ { color: "#876756", display: "inline" } }>''../pages/Paintball';</p></LandingPBButton>
                    <LandingYTButton style={ { color: "#b18dbcbd" } }>import <Link style={ { color: "#95b4da", textDecoration: "none" } } to="/YTTW">YouTube/Twitch</Link> from <p style={ { color: "#876756", display: "inline" } }>''../pages/YTTW';</p></LandingYTButton>
                    <LandingYTButton style={ { color: "#b18dbcbd" } }>import <Link style={ { color: "#95b4da", textDecoration: "none" } } to="/code">Code</Link> from <p style={ { color: "#876756", display: "inline" } }>''../pages/Code';</p></LandingYTButton>

                </Backimg2>


            </Desktop>

            <Tablet>
                <div>You are on a tablet</div>
            </Tablet>

            <Mobile>
                <div>You are on a phone</div>
            </Mobile>


        </div>
    )
};

export default Landing