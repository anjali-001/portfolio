import React, { useContext } from "react";
import sample from "../img/blogsample.jpeg";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import Navheader from "../components/Navheader";
import { Context } from "../context";

function Blog() {
  const { toggleTheme, darkMode } = useContext(Context);
  return (
    <div>
      <Navheader />
      <div className={darkMode ? "themeDark row" : "themeLight row"}>
        <div className="col-md-8 col-12 mx-auto">
          <Card className="blog">
            <CardImg
              top
              width="auto"
              style={{ height: "250px" }}
              src={sample}
              alt="Card image cap"
              className="img-fluid blog-img blog-img"
            />
            <CardBody className={darkMode ? "themeDark" : "themeLight"}>
              <a className="blog-title" href="https://medium.com/@anjalisingh_421/button-gradient-1349292b52fe?source=friends_link&sk=b4c0c5ba329db87eec0b367f02bd8227" target="_blank">
              <CardTitle>
                Button Gradient
              </CardTitle>
              </a>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
            <div className="overlay">
              <h1 className="blog-hover">Read more</h1>
            </div>
          </Card>
          <br />
          <Card className="blog">
            <CardImg
              top
              width="auto"
              style={{ height: "250px" }}
              src={sample}
              alt="Card image cap"
              className="img-fluid blog-img blog-img"
            />
            <CardBody className={darkMode ? "themeDark" : "themeLight"}>
              <CardTitle style={{ fontSize: "30px" }}>
                Button Gradient
              </CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
            <div className="overlay">
              <h1 className="blog-hover">Read more</h1>
            </div>
          </Card>
          <br/>
          {/* <Card className="blog">
            <CardImg
              top
              width="auto"
              style={{ height: "250px" }}
              src={sample}
              alt="Card image cap"
              className="img-fluid blog-img blog-img"
            />
            <CardBody className={darkMode ? "themeDark" : "themeLight"}>
              <CardTitle style={{ fontSize: "30px" }}>
                Button Gradient
              </CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
            <div className="overlay">
              <h1 className="blog-hover">Read more</h1>
            </div>
          </Card> */}
        </div>
      </div>
    </div>
  );
}
export default Blog;
