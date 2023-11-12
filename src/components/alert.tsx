import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const Alert = ({ children }: Props) => {
    return (
        <div className='alert alert-primary'></div>
    )
}

export default Alert
