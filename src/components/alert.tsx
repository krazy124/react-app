import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const alert = ({ children }: Props) => {
    return (
     <div className={alertName} role="alert">
     {alertMessage}
     <button type="button" className={cName}
      data-bs-dismiss="alert" aria-label="Close"></button>
     </div>
    )
}

export default Alert
