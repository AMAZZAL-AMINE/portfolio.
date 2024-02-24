import { Box, Container } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

const data = {
    "graphics": [
        {
            id : 1,
            name: "So_long",
            description: "A simple 2D game, made with C and the minilibx library.",
            url: "https://github.com/AMAZZAL-AMINE/so_long",
            cover : "https://user-images.githubusercontent.com/81205527/174392536-21619238-638a-4173-a77c-1b168c6c7898.png"
        },
        {
            id : 2,
            name: "Cub3D",
            description: "A raycasting 3D game , made with C and the minilibx library.",
            url: "https://github.com/AMAZZAL-AMINE/cub3d",
            cover : "https://camo.githubusercontent.com/a039549bce67adaef086f404f6c863dbec515dc5fc95edbaadac24fe37269bb6/68747470733a2f2f692e696d6775722e636f6d2f6c6c355039524e2e706e67"
        }
    ],
    "web" : [
        {
            id  : 1,
            name: "Schole management",
            description: "A school management web application, made with laravel",
            url: "https://institute-ima.com/",
            cover : "https://miro.medium.com/v2/resize:fit:1200/1*WRrO82AXvX9L9tlnBFaDog.png"
        },
        {
            id  : 2,
            name: "Netflex Clone",
            description: "A netflex clone, made with React and the TMDB API.",
            url: "https://github.com/AMAZZAL-AMINE/Neflex-clone",
            cover : "https://miro.medium.com/v2/resize:fit:1400/1*Z4T8ZeuOmCoEZFnvWwjyyA.png"
        },
        {
            id  : 3,
            name: "AI chat app",
            description: "A chat app with an AI, made with React and the google gemini API.",
            url: "https://github.com/AMAZZAL-AMINE/ai-chat-app",
            cover : "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Build_with_Gemini_dk_16_9_1.width-1200.format-webp.webp"
        },
    ],
    "problem_solving" : [
        {
            id : 1,
            name : "Minishell",
            description: "A simple shell, made with C.",
            url: "https://github.com/AMAZZAL-AMINE/minishill",
            cover : "https://cdn-ak.f.st-hatena.com/images/fotolife/a/abvi/20230830/20230830065359.png"
        },
        {
            id : 2,
            name : "Push_swap",
            description: "A sorting algorithm using two stacks and a limited set of instructions.",
            url: "https://github.com/AMAZZAL-AMINE/push_swap",
            cover : "https://i.ytimg.com/vi/yrMsuw9rKbA/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYACuAWKAgwIABABGH8gFigTMA8=&rs=AOn4CLDf6iFopErOXLwgEU-LcyKoQKRYRA"
        },
        {
            id : 3,
            name : "Philosophers",
            description: "A multithreading problem solving project.",
            url: "https://github.com/AMAZZAL-AMINE/philosopher",
            cover : "https://www.interviewbit.com/blog/wp-content/uploads/2021/10/Banner-Dining-Philosophers-Problem.png"
        },
        {
            id: 4,
            name: "minitalk",
            description: "A simple client/server communication program using signals.",
            url: "https://github.com/AMAZZAL-AMINE/mini-process-talk",
            cover : "https://i.ytimg.com/vi/Bt7YjlDQNqM/maxresdefault.jpg"
        },
    ]

}

const CardProject = (props) => {
    return (
        <Box marginTop={{ xs: 5, md: 10 }}>
            <p className="titles"> {props.title}</p>
            <div className="empty_line"></div>
            <div className="web_projects">
                {props.data.map((project, index)  => (
                    <a key={index} className="project_card" href={project.url} target="_blank" rel="noreferrer">
                        <img src={project.cover} alt={project.name} />
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </a>
                ))}
            </div>
        </Box>
    );
}

export default function Projects() {
    return (
        <Container maxWidth="lg" >
            <Header />
            <Box marginTop={15}>
                <Box>
                    <h1 className="home_title_">My <span>Projects</span>, </h1>
                    <p className="desc_"> 
                        Here you can find all my projects, designs, and everything i have done.
                    </p>
                </Box>
                <CardProject 
                    data={data.graphics}
                    title="Graphics Projects"
                />
                <CardProject 
                    title="Problem Solving Projects"
                    data={data.problem_solving}
                />
                <CardProject 
                    title="Web Application Projects"
                    data={data.web}
                />
            </Box>
            <Footer />
        </Container>
    );
}