import { ReactNode } from 'react';

interface Props {
  alertName: string;
  alertMessage: string;
  cName: string;
}

const alert = ({alerName,alertMessage,cName}: Props) => {
    return (
     <div className={alertName} role="alert">
     {alertMessage}
     <button type="button" className={cName}
      data-bs-dismiss="alert" aria-label="Close"></button>
     </div>
    )
}

export default Alert
