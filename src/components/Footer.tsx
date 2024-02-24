import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
    return (
        <Box
            borderTop={0.5}
            borderColor={"#1f1f1f"}
            padding={2}
            marginTop={20}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
        >
            <Box>
                <p
                    style={{
                        fontSize: "0.8rem",
                        color: "#666",
                        textAlign: "center",                
                        display: "flex",
                        gap: 10,
                        alignItems: "center",
                    }}
                >
                    <span>amineamazzal©{new Date().getFullYear()}</span>
                    <a 
                        style={{
                            color: "#666",
                            fontSize: "0.1rem",
                            textDecoration: "none",
                        }}
                        href="https://github.com/AMAZZAL-AMINE" 
                        target="_blank" 
                        rel="noreferrer">
                        <GitHub />
                    </a>
                    <a 
                        style={{
                            color: "#666",
                            fontSize: "0.1rem",
                            textDecoration: "none",
                        }}
                        href="https://www.linkedin.com/in/amine-amazzal/" 
                        target="_blank" 
                        rel="noreferrer">
                        <LinkedIn />
                    </a>
                </p>
            </Box>
            <Box
                style={{
                    fontSize: "0.8rem",
                    color: "#666",
                    textAlign: "center",
                }}
            >
                created with ❤️ by amineamazzal
            </Box>
        </Box>
    );
}