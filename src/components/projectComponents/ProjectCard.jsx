import { Card, Button } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./projectStyles.css";

export default function ProjectCard(props) {
  return (
    <Card className="project-card-view max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="!text-white !font-bold !underline">
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "center" }} className="!text-white">
          {props.description}
        </Card.Text>
        <Button
          className="flex-end bottom-0 mt-4"
          variant="primary"
          href={props.ghLink}
          target="_blank"
        >
          <BsGithub size={30} /> &nbsp;
          {props.isBlog ? "Blog" : null}
        </Button>
        {"\n"}
        {"\n"}

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
