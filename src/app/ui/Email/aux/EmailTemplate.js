'use client'
  export const EmailTemplate = ({
    name, message, email
  }) => (
    <div>
      <h1>They tell us about: <strong style={{ fontSize: 'medium', color:'red' }}>{email}</strong></h1>
      <p>{message}!</p>
      
      {/* <button>
          <a href="https://www.google.com">Click me</a>
      </button> */}
    </div>
  );