import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

export default function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="!text-5xl !font-medium !pt-2.5" style={{ paddingBottom: "20px" }}>
        Days I <strong><span className="text-green-700">Code</span></strong>
      </h1>
      <GitHubCalendar
        username="BasicallyManny"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}
