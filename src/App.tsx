import Cat from "./components/button";

function App() {
  const aConsole = () => console.log("It Clicked!!");
  let btnColor = "warning";
  let firstName = "Sarah";
  let alName = "alert alert-warning alert-dismissible fade show";
  let alMessage = "You should check in on some of those fields below.";
  let caName = "btn-close";

  return (
    <Cat
      alertName={alName}
      alertMessage={alMessage}
      cName={caName}
      color={btnColor}
      onClick={aConsole}
    >
      {firstName}
    </Cat>
  );
}

export default App;
