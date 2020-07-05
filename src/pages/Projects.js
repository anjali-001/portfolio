import React, {useContext} from "react";
import Navheader from "../components/Navheader";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
import bingo from '../img/BINGO.png';
import downnine from '../img/downnine.png';
import resort from '../img/beachresort.jpeg';
import mobile from '../img/mobilestore.png';
import { Context } from "../context";
import {Link} from 'react-router-dom';

function Projects() {
    const {darkMode} = useContext(Context);
  return (
    <div>
      <Navheader />
      <div className={darkMode?"themeDark ":"themeLight "}>
          <div  className="container">
          <div className="row pt-3">
              
        <Card inverse className={darkMode?"projectcardbg col-md-4 projecthover":" col-md-4 projecthover"}>
        <a href="https://qbingo-19.web.app/" target="_blank">   
          <CardImg
            className="project-card"
            width="30%"
            src={bingo}
            alt="Card image cap"
          />
          <CardImgOverlay>
            <CardTitle className="project-title">qBingo</CardTitle>
            <CardText className="project-detail">
              This is a fun little housie project that I build with ReactJS as a part of a challenge. Hosted on firebase. Give it a try if you will.
            </CardText>
            <CardText>
              <small className="text-muted">Go to the website</small>
            </CardText>
          </CardImgOverlay>
          </a>
        </Card>
       
        <Card inverse className={darkMode?"projectcardbg col-md-4 projecthover":" col-md-4 projecthover"}>
        <a href="https://downnine.netlify.app/" target="_blank"> 
          <CardImg
          className="project-card"
            width="30%"
            src={downnine}
            alt="Card image cap"
          />
          <CardImgOverlay>
            <CardTitle className="project-title">Downnine</CardTitle>
            <CardText className="project-detail">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <CardText>
              <small className="text-muted">Go to the website</small>
            </CardText>
          </CardImgOverlay>
          </a>
        </Card>
        <Card inverse className={darkMode?"projectcardbg col-md-4 projecthover":" col-md-4 projecthover"}>
        <a href="https://beach-resort19.web.app/" target="_blank"> 
          <CardImg
          className="project-card"
            width="30%"
            src={resort}
            alt="Card image cap"
          />
          <CardImgOverlay>
            <CardTitle className="project-title">Beach Resort</CardTitle>
            <CardText className="project-detail">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <CardText>
              <small className="text-muted">Go to the website</small>
            </CardText>
          </CardImgOverlay>
          </a>
        </Card>
        <Card inverse className={darkMode?"projectcardbg col-md-4 projecthover":" col-md-4 projecthover"}>
        <a href="https://react-phone-store19.netlify.app/" target="_blank"> 
          <CardImg
          className="project-card"
            width="30%"
            src={mobile}
            alt="Card image cap"
          />
          <CardImgOverlay>
            <CardTitle className="project-title">Mobile Store</CardTitle>
            <CardText className="project-detail">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <CardText>
              <small className="text-muted">Go to the website</small>
            </CardText>
          </CardImgOverlay>
          </a>
        </Card>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Projects;
