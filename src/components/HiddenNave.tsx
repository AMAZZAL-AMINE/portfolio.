import { Box } from "@mui/material";
import {data} from '../pages/Home'
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

export default function HiddenNave(props: any) {
    return (
        <Box 
            position={"fixed"}
            top={0}
            left={0}
            width={"100%"}
            height={"100%"}
            zIndex={1000}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                transform: "scale(1)",
                transition: "transform 0.3s ease-in-out",
            }}
        >
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
              <Box 
                position={"absolute"}
                top={0}
                right={0}
                padding={2}
                onClick={props.onClick}
                height={50}
                width={50}
                marginTop={2}
                marginRight={2}
                style={{
                    cursor: "pointer",
                    color: "white",
                    fontSize: "1.5rem",
                    backgroundColor: "#1f1f1f",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                }}
                >
                <CloseIcon />
              </Box>
        </Box>
    );
}