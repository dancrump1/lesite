import React from "react";
import Nav from "../components/Nav";
import Styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SideNav from '../components/SideNav';
import MediaQuery from 'react-responsive';

const Desktop = props => <MediaQuery {...props} minWidth={1281} />;
const Tablet = props => <MediaQuery {...props} minWidth={768} maxWidth={1280} />;
const Mobile = props => <MediaQuery {...props} maxWidth={767} />;

const Backimg = Styled.div`
background-image: linear-gradient(#5614B0, #1fddff);
background-attachment: fixed;
width: 100%;
`;

const SiteGrid = Styled.div`
display: grid;
grid-template-areas: 
'Nav Nav Nav'
'SideNav E2 E2'
'SideNav E3 E3'
'E4 E4 E4';
grid-template-columns: 1fr 1fr 3fr;
grid-template-rows: 1fr 10fr 10fr;
grid-gap: 30px;
`;

const E2 = Styled.div`
grid-area: E2;
text-align: center;
border: 2px solid palevioletred;
border-radius: 3px;
margin: 15px
`;
const E3 = Styled.div`
grid-area: E3;
background: green;
border: 2px solid palevioletred;
border-radius: 3px;
margin: 15px

`;
const E4 = Styled.div`
grid-area: E4;
background: #f4f4f5;
border: 2px solid palevioletred;
  border-radius: 3px;
`;

const E1 = Styled.div`
grid-area: Nav;
`;

const E5 = Styled.div`
grid-area: SideNav;
border: 2px solid palevioletred;
  border-radius: 3px;
`;



class PB extends React.Component {

  render() {
    return (
      <div>
        <Desktop>
          <Backimg>
            <SiteGrid>
              <E1>
                <Nav className="Nav" />
              </E1>

              <E5>
                <SideNav className="SideNav" />
              </E5>

              <E2 id="E2">
                <Carousel showThumbs={false}>
                  <div className="videoWrapper">
                    <iframe
                      id="player"
                      title="Breakout"
                      type="text/html"
                      src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdan.crump.9%2Fvideos%2F2231439123545996%2F&show_text=0&"
                      frameBorder="0"
                    >
                    </iframe>
                  </div>
                  <div className="videoWrapper">
                    <iframe
                      title="Iframe1"
                      src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdan.crump.9%2Fvideos%2F2231437240212851%2F&show_text=0&"

                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen={true}>
                    </iframe>
                  </div>
                </Carousel>
              </E2>

              <E3 id="E3">
                <Carousel autoPlay={false} showArrows={true} showThumbs={false}>
                  <div className="picWrapper">
                    <iframe
                      title="Iframe2"
                      src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdan.crump.9%2Fposts%2F2229967180359857%3A0"
                      type="text/html"
                      frameBorder="0"
                    >
                    </iframe>
                  </div>
                  <div className="picWrapper">
                    <iframe
                      title="Iframe3"
                      src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D2231273116895930%26set%3Da.971308412892413%26type%3D3%"
                      frameBorder="0"
                    >
                    </iframe>
                  </div>
                  <div className="picWrapper">
                    <iframe
                      title="Iframe4"
                      src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fosgpaintball%2Fphotos%2Fa.10154228082491192%2F10154228090986192%2F%3Ftype%3D3"
                      width="100%"
                      height="600px"
                    >
                    </iframe>
                  </div>
                  <div className="picWrapper">
                    <iframe
                      title="Iframe5"
                      src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D2231273123562596%26set%3Da.971308412892413%26type%3D3"
                      width="100%"
                      height="600px"
                    >
                    </iframe>
                  </div>
                  <div className="picWrapper">
                    <iframe
                      title="Iframe6"
                      src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D2231273146895927%26set%3Da.971308412892413%26type%3D3"
                      width="100%"
                      height="600px"
                    >
                    </iframe>
                  </div>
                </Carousel>
              </E3>

              <E4 id="E4">

              </E4>
            </SiteGrid>
          </Backimg>
        </Desktop>

        <Tablet>
          <div>You are on a tablet</div>
        </Tablet>

        <Mobile>
          <div>You are on a phone</div>
        </Mobile>

      </div>
    )
  }
}

export default PB;