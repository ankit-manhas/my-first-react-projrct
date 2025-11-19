export default function Button() {
  function ButtonClick() {
    alert("Congrats");
  }

  return (
    <button className="etimate" onClick={ButtonClick}>
      Schedule Free Estimate
    </button>
  );
}


