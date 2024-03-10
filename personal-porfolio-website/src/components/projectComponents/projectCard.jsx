import {Card,Button} from 'react-bootstrap';
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import './projectStyles.css';


export default function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button className="flex-end bottom-0 mb-3" variant="primary" href={props.ghLink} target="_blank">
          <BsGithub size={30} /> &nbsp;
          {props.isBlog ? "Blog" : null}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}