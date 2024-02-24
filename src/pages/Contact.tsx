import { Box, TextField,Container } from "@mui/material";
import { Form } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <Container maxWidth="lg" >
            <Header />
            <Box marginTop={10}>
                <Box>
                    <h1 className="home_title_">Let's <span>talk</span></h1>
                    <p className="desc_"> 
                        I am always open to discussing product design work or partnership opportunities.
                        Please feel free to reach out to me.
                    </p>
                </Box>
                <Box 
                    marginTop={10}
                >
                    <p className="titles"> Contact via mail </p>
                    <div className="empty_line"></div>
                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            marginTop: "50px",
                            width: "100%"
                        }}
                    >
                        <input type="hidden" name="access_key" value="e09b3136-a3b6-417b-a186-cf1641158977" />
                        <Box>
                            <input
                                className="input_"
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                        </Box>
                        <Box>
                        <input className="input_"
                                name="name"
                                type="text" 
                                placeholder="Full name" 
                            />
                        </Box>
                        <textarea
                            name="message"
                            placeholder="Message"
                            className="message_input" >
                        </textarea>
                        <Box className="btn_box">
                            <button
                                className="btn_"
                                style={{ width: "100px", alignSelf: "flex-end" }}
                            >
                                Send
                            </button>
                            
                        </Box>
                    </form>
                </Box>
            </Box>
            <Footer />
        </Container>
    );
}