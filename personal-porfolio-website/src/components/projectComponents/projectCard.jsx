import {Card,Button} from 'react-bootstrap';
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";


export default function projectCard(props){
    return(
        <section id="ProjectCard" className="">
            <Card id="CardHeader" className="">
                <Card.Img variant="top" src={props.imagePath} alt="card-img"/>
                <Card.Body>
                    <Card.Title>{props.Title}</Card.Title>
                    <Card.Text className="text-justify">
                        {props.description}
                    </Card.Text>
                    <Button id="LinksButton" variant="primary" href={props.ghLink} target="_blank">
                        <BsGithub /> &nbsp;
                        {props.isBlog ? "Blog" : "GitHub"}
                    </Button>
                    {"\n"}
                    {"\n"}
                    { /* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
                    {!props.isBlog && props.demoLink && (
                        <Button variant="primary" href={props.demoLink} target="_blank" className="ml-2.5"> <CgWebsite /> &nbsp; {"Demo"}</Button>
                    )}
                </Card.Body>
            </Card>
        </section>
    )
}