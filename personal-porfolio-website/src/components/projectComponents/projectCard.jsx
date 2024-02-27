import {Card,Button} from 'react-bootstrap';
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import './projectStyles.css';


export default function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" className="!object-fill !w-full" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="text-justify">
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            className="ml-2.5"
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}