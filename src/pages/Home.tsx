import { Box } from "@mui/material";
import Mee from "../assets/images/mee.png";
import { Link } from "react-router-dom";
import { data_techno } from "../components/techno.data";

export const data = [
    {
        "name": "Blog",
        "description": "Here you can find my blog posts.",
        "url": "/blog"
    },
    {
        "name": "Projects",
        "description": "Projects, Designs, and everything i have done.",
        "url": "/projects"
    },
    {
        "name": "My circle of life",
        "description": "show my circle of life.",
        "url": "/circle"
    },
    {
        "name": "Let's talk",
        "description": "Open to work, or just want to talk.",
        "url": "/talk"
    }
]

export default function Home() {
    return  (
       <Box
        marginTop={10}
       >
            <Box
                display={{ 
                    md: 'flex',
                    xs: 'block'
                }}
                justifyContent="space-between"
            >
                <Box>
                    <h1 className="home_title_">Amine <span>Amazzal</span>, </h1>
                    <p className="what_do">Full-Stack Developer</p>
                    <p className="desc_"> 
                        I'm a full-stack developer with a passion for creating web applications.
                        I have experience in building web applications with React, Node.js, ect...
                    </p>
                </Box>
                <Box>
                    <img
                        src={Mee}
                        alt="Amine Amazzal"
                        className="mee_img"
                    />
                </Box>
            </Box>
            <Box marginTop={10}>
                <p className="titles"> Pages </p>
                <div className="empty_line"></div>
              <div className="box_links">
                {data.map((item, index) => (
                    <div className="links__" key={index} >
                        <Link
                            to={item.url}
                            className="link_">
                            <h1> {item.name} </h1>
                            <p> {item.description} </p>
                        </Link>
                    </div>
                    ))}
              </div>
            </Box>
            <Box marginTop={10}>
                <p className="titles"> Technologies </p>
                <div className="empty_line"></div>
              <div className="box_teckno">
              <p className="titles_small"> Backend </p>
                <div className="data_techno">
                    {data_techno.backend.map((item, index) => (
                        <div className="techno_card" key={index} >
                            <img src={item.icon} alt={item.name} />
                            <p> {item.name} </p>
                        </div>
                    ))}
                </div>
              <p className="titles_small"> Frontend </p>
                <div className="data_techno">
                    {data_techno.frontend.map((item, index) => (
                        <div className="techno_card" key={index} >
                            <img src={item.icon} alt={item.name} />
                            <p> {item.name} </p>
                        </div>
                    ))}
                </div>
              </div>
              <p className="titles_small"> Othe r</p>
                <div className="data_techno">
                    {data_techno.skills.map((item, index) => (
                        <div className="techno_card" key={index} >
                            <img src={item.icon} alt={item.name} />
                            <p> {item.name} </p>
                        </div>
                    ))}
                </div>
            </Box>
       </Box>
    );
}