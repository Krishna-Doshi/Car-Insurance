import { Container } from "react-bootstrap";
import { SlidesCarousel } from "./Carousel";
import { Header } from "./Header";

export function Home(){
    return(
        <Container>
        <Header text="This is our Car Insuarnace Home page"></Header>
        <SlidesCarousel> </SlidesCarousel>
        </Container>
    )

}