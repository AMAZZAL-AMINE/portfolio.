import { Box } from "@mui/material"
import { Link } from "react-router-dom";
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import HiddenNave from "./HiddenNave";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const onClick = () => {
        setIsOpen(!isOpen);
    }
    
    const handleThemeChange = () => {
        alert("I'm sorry, but this feature is not available yet,it is easy, but  im really lazy to do it.");
    }
    return (
        <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"100%"}
            marginTop={2}
        >
            {isOpen && <HiddenNave 
                onClick={onClick}
                isOpen={isOpen}
            />}
            <Box>
                <h1 
                    className="logo_">
                    <Link className="logo__text" to="/">
                        A
                    </Link>
                    <Link to="/">
                        MINE
                    </Link>
                </h1>
            </Box>
            <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={2}
            >
                <button 
                    onClick={handleThemeChange}
                    className="nav_btn">
                    <LightModeIcon />
                </button >
                <button  
                    onClick={onClick}
                    className="nav_btn">
                    <MenuIcon />
                </button>
            </Box>
        </Box>
    );
}