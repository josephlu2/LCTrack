import './App.css';
import Navbar from "./components/Navbar";
import Problem from "./components/Problem"
import data from "./data"
import { ToastContainer } from 'react-toastify';
import ReactGA from "react-ga4";

ReactGA.initialize("G-RY8F7CR75P");
ReactGA.send("pageview");
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
      <ToastContainer />
    </div>
  );
}

export default App;
