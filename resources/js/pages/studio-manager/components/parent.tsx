import { useState } from 'react';
import MyDialog from './mydialog';

function ParentComponent() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [returnedValue, setReturnedValue] = useState('');

  // The callback function passed to the child dialog.
  // It receives a number and sets the state with its string representation.
  const handleDialogReturn = (num) => {
    if (num !== null) {
      setReturnedValue(String(num)); // Convert the number to a string
    }
    setIsDialogOpen(false); // Close the dialog
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={() => setIsDialogOpen(true)}>Open Dialog</button>
      
      {returnedValue && (
        <p>Value returned from dialog: <strong style={{ color: 'green' }}>{returnedValue}</strong></p>
      )}

      {isDialogOpen && (
        <MyDialog onReturn={handleDialogReturn} />
      )}
    </div>
  );
}

export default ParentComponent;