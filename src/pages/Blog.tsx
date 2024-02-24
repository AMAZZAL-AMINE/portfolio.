import { Box,Container } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Blog() {
    return (
        <Container 
        
            style={{
                height: "100vh",
            }}
            maxWidth="lg" >
            <Header />
            <Box 
                marginTop={10}>
                <Box>
                    <h1 className="home_title_">Amine's <span>Blog</span></h1>
                    <p className="desc_"> 
                        Latest articles and thoughts on coding, talking about web application and more.
                    </p>
                </Box>
                <Box marginTop={10} height={"100%"}>
                    <p className="titles"> Latest articles </p>
                    <div className="empty_line"></div>
                    <Box marginTop={10}>
                        <Box 
                            border={1}
                            borderRadius={5}
                            borderColor={"#707171"}
                            padding={10}
                            width={{
                                md: "30%",
                                sm: "100%"
                            }}
                            color={"#707171"}
                            textAlign={"center"}
                            
                        >
                            <p>Coming soon...</p>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </Container>
    );
}