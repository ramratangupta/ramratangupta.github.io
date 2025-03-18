export default function YTPlayer(props) {
  return (
    <div className="embed-responsive embed-responsive-4by3">
      <iframe
        allowFullScreen
        className="embed-responsive-item  w-100"
        style={{ height: props.height || "400px" }}
        src={"https://www.youtube.com/embed/" + props.ytID+"?rel=0"}
      ></iframe>
    </div>
  );
}
