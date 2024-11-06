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

        {/* Button Container */}
        <div className={`button-container ${!props.isBlog ? "no-blog" : ""}`}>
          {/* GitHub Button */}
          <Button
            className="project-card-btn github"
            variant="primary"
            href={props.ghLink}
            target="_blank"
          >
            <BsGithub size={30} /> &nbsp;
          </Button>

          {/* If it is a blog, show a button to navigate to the blog */}
          {props.isBlog && (
            <Button
              className="project-card-btn blog"
              variant="secondary"
              href={props.blogLink} // Provide the blog link as a prop
              target="_blank"
            >
              <CgWebsite size={30} /> &nbsp;
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
