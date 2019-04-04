import React from "react";
import Nav from "../components/Nav";
import Styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const SiteGrid = Styled.div`
display: grid;
grid-template-areas: 
'Nav Nav'
'E2 E3'
'E5 E6'
'E4 E4';
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 4fr 4fr 1fr;
grid-gap: 10px
`;

const E2 = Styled.div`
grid-area: E2;
text-align: center;
`;
const E3 = Styled.div`
grid-area: E3;
background: green;
text-align: center;
`;
const E4 = Styled.div`
grid-area: E4;
background: yellow;
`;
const E5 = Styled.div`
grid-area: E5;
background: black;
`;
const E6 = Styled.div`
grid-area: E6;
background: red;
`;


class P1 extends React.Component {
    state = {

    };

    render() {
        return (
            <SiteGrid>
                <Nav className="Nav" />
                <E2>
                    <h1>My experience with youtube</h1>

                    <Carousel showThumbs={ false }>
                        <div>
                            <iframe
                                id="player"
                                title="vid1"
                                type="text/html"
                                width="100%"
                                height="600px"
                                src="https://www.youtube.com/embed/ZFWLSzuvKPE"
                                frameBorder="0">
                            </iframe>
                        </div>

                        <div>
                            <iframe
                                id="player"
                                type="text/html"
                                title="vid2"
                                width="100%"
                                height="600px"
                                src="https://www.youtube.com/embed/Unx3oCpg2z8"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            >
                            </iframe>
                        </div>
                    </Carousel>
                </E2>
                <E3>
                    <h1>Full Twitch Vods</h1>
                    <Carousel showThumbs={ false }>
                        <div>
                            <iframe
                                src="https://player.twitch.tv/?channel=justlowfps&autoplay=false"
                                height="600px"
                                width="100%"
                                frameBorder="<frameborder>"
                                scrolling="<scrolling>"
                                title="Iframe1">
                            </iframe>
                        </div>
                        <div>
                            <iframe
                                src="https://player.twitch.tv/?video=403256543&autoplay=false"
                                height="600px"
                                width="100%"
                                frameBorder="<frameborder>"
                                scrolling="<scrolling>"
                                title="Iframe2">
                            </iframe>
                        </div>
                    </Carousel>
                </E3>
                <E5>
                    <Carousel showThumbs={ false }>
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
                <E6 />
                <E4 />
            </SiteGrid>
        )
    }
}

export default P1;