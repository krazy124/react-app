import React from 'react'

interface Props {
    children: string;
    color: string;
    onClick: () => void;
    alertName: string;
    alertMessage: string;
    cName: string;
}

const Cat = ({ children, onClick, color, alertName, alertMessage, cName }: Props) => {
    return (
        <div>
            <div className={alertName} role="alert">
                {alertMessage}
                <button type="button" className={cName} data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
        </div>
    )
}

export default Cat

/*<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>*/


//This is the code that App.tsx needs to insert button
//This will add a button to your page, when the button is clicked a "It Clicked!!" will appear in the console. 
/*import Cat from './components/button';

function App() {
  const aConsole = () => console.log('It Clicked!!');
  let btnColor = "warning";
  let firstName = "William";

  return (
    <Cat color={btnColor} onClick={aConsole}>{firstName}</Cat>
  );
}

export default App;*/