import './App.css'
// const name = "John Jacob";
// const textValue = "Manikandan A"
const greeting = {
    wish: "Hello",
    title: "React.js",
    val: "Department"
}
function getTitle(title) {
    return title;
}
function Home() {
return (
  <div>
    <p>{greeting.wish}, {greeting.title}, and {getTitle('Node.js')}</p>
    <label htmlFor="search">Search:</label>
    <input type="text" id='search' value={greeting.val}/>
  </div>
);
}
export default Home