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
        <table>
          <tr>
            <th>Status</th>
            <th>Name</th>
            <th>Difficulty</th>
            <th>Category</th>
            <th>Notes</th>
            <th>Save</th>
          </tr>
          {problems}
        </table>
      </section>
    </div>
  );
}

export default App;
