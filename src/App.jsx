function App() {
  const name = "StarGazers";
  const styles = { color: "steelblue", fontStyle: "italic" };
  return (
    <div className="container">
      <article>
        <>
          <img src="images/group.svg" alt="StarGazers Group" />
          <h1>
            Meet the <b style={styles}>{name}</b>
          </h1>
          <p>
            Members of an <b>intergalactic alliance</b> paving the way for peace
            and benevolence among all species. They are known for their
            enthusiasm for science, for their love of fun, and their dedication
            to education.
          </p>
          <button className="outline" onClick={() => alert("Hi there")}>
            Click Me
          </button>
        </>
      </article>
    </div>
  );
}
export default App;
