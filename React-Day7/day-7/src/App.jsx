import Home from "./Home"
import MyComponent from "./MyComponent";
import ParentComponent from "./ParentComponent";


function App() {
  let name = "Manikandan Anbalagan";
  return (
    <div>
      {/* <Home land="2500 square feet" name={name} designation="Project Manager" /> */}
      {/* <ParentComponent /> */}
      <MyComponent name="Manikandan A" />
    </div>
  )
}

export default App
