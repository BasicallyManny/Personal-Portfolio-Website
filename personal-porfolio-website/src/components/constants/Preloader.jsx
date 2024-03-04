export default function PreLoader(props) {
  return(
    <div id={props.load ? "preloader" : "preloader-none"}></div>
  );
}