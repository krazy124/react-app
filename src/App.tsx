import Button from "./components/Button";
import Alert from "./components/Alert";
import Test from "./components/Test";

function App() {
  const aConsole = () => console.log("It Clicked!!");
  let btnColor = "primary";
  let firstName = "Conan";
  let alName = "alert alert-warning alert-dismissible fade show";
  let alMessage = "You should check in on some of those fields below.";
  let caName = "btn-close";

  return (
    <div>
    <Alert/>
    <Button 
    color={btnColor}
    onClick={aConsole}>
    {firstName}
    </Button>
    </div>
)
}

export default App;
