import './App.css';
import Navbar from "./components/Navbar";
import Problem from "./components/Problem"
import data from "./data"

function App() {
  const problems = data.map(item => {
    return <Problem key={item.id} {...item} />;
  })

  return (
    <div className="App">
      <Navbar />
      <section>
        {problems}
      </section>
    </div>
  );
}

export default App;
