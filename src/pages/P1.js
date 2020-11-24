import React from "react";
import Nav from "../components/Nav";
import Styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Backimg = Styled.div`
background-image: linear-gradient(#5614B0, #1fddff);
background-attachment: fixed;
width: 100%;
`;

const SiteGrid = Styled.div`
display: grid;
grid-template-areas: 
'Hea Hea'
'E2 E2'
'E3 E3'
'E5 E6'
'E4 E4';
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 14fr 14fr 14fr 1fr;
`;

const E1 = Styled.div`
grid-area: Hea;
`;

const E2 = Styled.div`
grid-area: E2;
text-align: center;
margin: 10px;
`;
const E3 = Styled.div`
grid-area: E3;
text-align: center;
margin: 10px;
`;
const E4 = Styled.div`
grid-area: E4;
background: yellow;
margin: 10px;
`;
const E5 = Styled.div`
grid-area: E5;
text-align: center;
margin: 10px;
`;
const E6 = Styled.div`
grid-area: E6;
margin: 10px;
text-align: center;
`;


class P1 extends React.Component {
    state = {

    };

    render() {
        return (
            <Backimg>
                <SiteGrid>
                    <E1>
                        <Nav />
                    </E1>
                    <E2>
                        <h1>My experience with youtube</h1>

                        <Carousel showThumbs={false}>

                            <div className="videoWrapper">
                                <iframe
                                    id="player"
                                    type="text/html"
                                    title="vid2"
                                    src="https://www.youtube.com/embed/Unx3oCpg2z8"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                >
                                </iframe>
                            </div>
                            <div className="videoWrapper">
                                <iframe
                                    id="player"
                                    title="vid1"
                                    type="text/html"
                                    src="https://www.youtube.com/embed/ZFWLSzuvKPE"
                                    frameBorder="0"
                                    >
                                </iframe>
                            </div>
                        </Carousel>
                    </E2>
                    <E3>
                        <h1>Full Twitch Vods</h1>
                        <Carousel showThumbs={false}>
                            <div className="videoWrapper">
                                <iframe
                                    src="https://player.twitch.tv/?channel=justlowfps&autoplay=false"
                                    title="Iframe1">
                                </iframe>
                            </div>
                            <div className="videoWrapper">
                                <iframe
                                    src="https://player.twitch.tv/?video=403256543&autoplay=false"
                                    title="Iframe2">
                                </iframe>
                            </div>
                        </Carousel>
                    </E3>
                    <E5>
                        <h1>Only the BEST clips</h1>

                        <Carousel showThumbs={false}>
                            <div>
                                <iframe
                                    src="https://clips.twitch.tv/embed?clip=SourBlushingEggplantTTours&autoplay=false"
                                    height="600px"
                                    width="100%"
                                    frameBorder="<frameborder>"
                                    scrolling="<scrolling>"
                                    title="Iframe3">
                                </iframe>

                            </div>
                        </Carousel>
                    </E5>
                    <E6>
                        <h1>Social media for JLOW</h1>
                    </ E6>
                    <E4 />
                </SiteGrid>
            </Backimg>
        )
    }
}

export default P1;