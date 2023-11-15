import React from 'react';

interface Props {
  alertName: string;
  alertMessage: string;
  cName: string;
}

const Alert = () => {
    return (
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    )
}

export default Alert;
