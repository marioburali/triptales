import { useState } from 'react';

function Test() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <h1>Test</h1>
      <p>This is a test component.</p>
      <button onClick={() => setClicked(true)}>Click here</button>

      {clicked && (
        <div>
          <h1>You made it!</h1>
          <p>Your component is working!</p>
        </div>
      )}
    </div>
  );
}

export default Test;