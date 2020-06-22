import React, {useContext} from 'react';
import {Context} from '../context';
import picture from '../img/name.jpeg';
import styled from 'styled-components';
import wlogo from '../img/wlogo.png';
import blogo from '../img/blogo.png';
import {Link} from 'react-router-dom';

function Home() {
    const{darkMode,toggleTheme} = useContext(Context);
    return (
        <HomeWrapper>
            <div className="head">
            <div className={darkMode?"container- fluid darkMode":"container- fluid light-mode"}>
            <div style={{display:"flex",alignContent:"center",justifyContent:"space-between"}}>
                        <div><img src={darkMode?blogo:wlogo} className="img-fluid logo"/></div>
                        <div onClick={()=>toggleTheme()}><i className={darkMode?"fa fa-sun-o header p-3":"fa fa-moon-o header p-3"}></i></div>
                </div>
                <div className="img-fluid pt-3">
                    <Link to="/">
                     <img src={picture} className="pic"></img>
                     </Link>
                </div>
                <h2 className="p-1">Anjali</h2>
                <div className="something">
                    <Link to="/" className={darkMode?"btb-element":"btw-element"}><p className={darkMode?"button-dark":"button"}>about</p></Link>
                    <Link to="/projects" className={darkMode?"btb-element":"btw-element"}><p className={darkMode?"button-dark":"button"}>projects</p></Link>
                    <Link to="/blog" className={darkMode?"btb-element":"btw-element"}><p className={darkMode?"button-dark":"button"}>Blog</p></Link>
                    <p className={darkMode?"button-dark":"button"}>Resume</p>
                </div>
                <div className="information">
                <p className="info">ECE undergrad, Heritage Institute of Technology; web developer(MERN Stack) and content writer. Trying to  find that balance between technical and artistic creativity (Just FYI, find the red dot for the non-tech side).</p>
                </div>
                </div>
                <div className={darkMode?"foot-dark":"foot"}>
                        <ul  className="footer">
                            <a href="https://twitter.com/_Anjali19_?s=08" className={darkMode?"btb-element":"btw-element"} target="_blank"><li><b>Twitter</b></li></a>
                            <a href="https://www.linkedin.com/in/anjali-singh19" className={darkMode?"btb-element":"btw-element"} target="_blank"><li><b>LinkedIn</b></li></a>
                            <a href="https://github.com/anjali-001" className={darkMode?"btb-element":"btw-element"} target="_blank"><li><b>GitHub</b></li></a>
                            <a href="mailto: anjali001.as@gmail.com" className={darkMode?"btb-element":"btw-element"} target="_blank"><li><b>Mail</b></li></a>
                        </ul>
                <p className="pfoot">Made with <i className={darkMode?"fa fa-heart":"fa fa-heart-o"}></i> | Anjali</p></div>
            </div>
            
        </HomeWrapper>
    )
}

export default Home;

const HomeWrapper = styled.div `

.header{
    display: block;
    text-align: right;
}
.logo{
    text-align:left;
    display:block;
    width:15vh;
    height:auto;
    padding:1vh;
    cursor: pointer;
}
.pic {
    border-radius: 50%;
    width: 35vh;
    height: auto;
    
}
.button{
    text-transform: capitalize;
    width: 100px;
      height: auto;
      border: double 2.5px transparent;
      border-radius: 80px;
      background-image: linear-gradient(white, white), radial-gradient(circle at top left, var(--mainPink), var(--mainBlue));
      background-origin: border-box;
      background-clip: content-box, border-box;
      cursor: pointer;
      margin:5px;

    }
    .button:hover{
        text-transform: capitalize;
        width: 100px;
          height: auto;
          border: double 2.5px transparent;
          border-radius: 80px;
          background-image: linear-gradient(to right, var(--mainPink), var(--mainBlue)), radial-gradient(circle at top left, var(--mainPink), var(--mainBlue));
          background-origin: border-box;
          background-clip: content-box, border-box;
          cursor: pointer;
          margin:5px;

        }
        .button-dark{
              text-transform: capitalize;
              width: 100px;
              height: auto;
              border: double 2.5px transparent;
              border-radius: 80px;
              background-image: linear-gradient(black, black), radial-gradient(circle at top left, var(--mainPink), var(--mainBlue));
              background-origin: border-box;
              background-clip: content-box, border-box;
              cursor: pointer;
              margin:5px;
            }
            .button-dark:hover{
                text-transform: capitalize;
                width: 100px;
                  height: auto;
                  border: double 2.5px transparent;
                  border-radius: 80px;
                  background-image: linear-gradient(to right, var(--mainPink), var(--mainBlue)), radial-gradient(circle at top left, var(--mainPink), var(--mainBlue));
                  background-origin: border-box;
                  background-clip: content-box, border-box;
                  cursor: pointer;
                  margin:5px;

                }
    .something{
      display: flex;
      align-items: center;  
      justify-content: center;
    }
    .information{

        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    .info{
        width: 80vw;
        text-align:justify;
    }

    li{
        list-style-type:none;
        text-decoration: none;
        padding:0;
        cursor:pointer;
    }

    .footer{
        display:flex;
        align-items: center;
        justify-content: space-around;
        padding: 1vh;
    }
    @media (min-width:768px)
    {
        .footer{
            display:flex;
            align-items: center;
            justify-content: center;  
            padding-top:1vh;
        }
        .info{
        width: 28vw;
        text-align:justify;
        }
        li{
        list-style-type:none;
        text-decoration: none;
        
        padding:0 2vh;
        cursor:pointer;
    }
    }

    .foot{
        background-color: var(--lightGrey);
        color: var(--mainDark);
        min-height: 13vh;
        bottom: 0;
        width:100%;
    }
    .foot-dark{
        
        background-color: var(--darkGrey);
        color: var(--mainWhite);
        min-height: 13vh;
        bottom: 0;
        width:100%;
    }
    .darkMode{
        background-color: black;
        min-height: 87vh;
        color: white;
    }

    .light-mode{
        background-color: white;
        min-height: 87vh;
        color: black;
    }
    .pfoot{
        margin:0px;
        padding:0px;
    }
    .btb-element{
        color:white;
        text-decoration:none;
    }
    .btw-element{
        color:black;
        text-decoration:none;
    }
    `
