import { useState } from 'react';

function MyDialog({ onReturn }) {
  const [inputValue, setInputValue] = useState(0);

  const handleConfirm = () => {
    // Call the parent's callback with the number.
    // The parent will handle the conversion to a string.
    onReturn(inputValue);
  };

  const handleCancel = () => {
    // Call the parent's callback with null to indicate cancellation.
    onReturn(null);
  };

  return (
    <div className="dialog-backdrop">
      <div className="dialog-content">
        <h2>Enter a number</h2>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
        <div className="dialog-actions">
          <button onClick={handleConfirm}>Confirm</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default MyDialog;