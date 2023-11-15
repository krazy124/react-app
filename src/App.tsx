import button from "./components/button";
import alert from "./components/alert";

function App() {
  const aConsole = () => console.log("It Clicked!!");
  let btnColor = "warning";
  let firstName = "Conan";
  let alName = "alert alert-warning alert-dismissible fade show";
  let alMessage = "You should check in on some of those fields below.";
  let caName = "btn-close";

  return (
  <div>
  <alert alertName={alName} alertMessage={alMessage} cName={caName}/>
 <button color={btnColor} onClick={aConsole}> {firstName}</button>
 </div>
  );
}

export default App;
