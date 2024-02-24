import { Box, Container } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import Typography from '@mui/material/Typography';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import SchoolIcon from '@mui/icons-material/School';

export default function CircleOfLife() {
    return (
        <Container maxWidth="lg" style={{height: "100vh"}}>
            <Header />
            <Box marginTop={10}>
                <Box>
                    <h1 className="home_title_">Need more about me ? <span> Scroll down</span></h1>
                    <p className="desc_"> 
                        Hi there 👋, my full name is mohamed amine amazzal, from morroco, im a software developer student at 1337 (42 network),
                        and full stack developwe, i realy love to code (hard code for many hours) and learn new things, and also i love to slove problems (except my own).
                    </p>
                </Box>
                <Box marginTop={20}>
                    <Timeline position="alternate" style={{height: "100%"}}>
                        <TimelineItem>
                            <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            fontSize={24}
                            color="#707171"
                            >
                            21/06/2001
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot>
                                <BabyChangingStationIcon />
                            </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '72px', px: 2 }}>
                            <Typography 
                                color={"#fff"}
                                variant="h6" 
                                component="span">
                                Birth
                            </Typography>
                            <Typography sx={{ color: "#707171" }} >Because this is where it all starts!</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                variant="body2"
                                fontSize={24}
                                color="#707171"
                            >
                                2014
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary">
                                    <LaptopMacIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography color={"#fff"} variant="h6" component="span">
                                Meet new machine friend
                            </Typography>
                            <Typography sx={{ color: "#707171" }}>Damn, im in love with this thing</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <HotelIcon />
                            </TimelineDot>
                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '52px', px: 2 }}>
                            <Typography 
                                sx={{ m: 'auto 0' }}
                                fontSize={24}
                                color="#fff"
                                variant="h6" 
                                component="span">
                                2016
                            </Typography>
                            <Typography sx={{ color: "#707171" }}>Fall in love with machine's laung</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            <TimelineDot color="secondary">
                                <SchoolIcon />
                            </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '220px', px: 2 }}>
                            <Typography 
                                fontSize={24}
                                color="#fff"
                                variant="h6" 
                                component="span">
                                2022 - {new Date().getFullYear()} School
                            </Typography>
                            <Typography sx={{ color: "#707171" }}>New journey has started 1337-42 School, and it's going to be a long one</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Box>
            </Box>
            <Footer />
        </Container>
    );
}