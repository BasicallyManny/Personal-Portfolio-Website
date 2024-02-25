import { Container, Row} from "react-bootstrap";


export default function SkillsCard(){
    return(
        <Container>
            <Row id="skillsPara" className="text-center mb-20">
                <blockquote>
                    <p className=" italic subpixel-antialiased !z-10 pl-16 pr-16 !mt-7 text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Here are some of my skills
                    </p>
                </blockquote>
            </Row>
        </Container>
    );
}