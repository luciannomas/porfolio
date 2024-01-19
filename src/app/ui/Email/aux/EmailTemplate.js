
  export const EmailTemplate = ({
    name, message, email
  }) => (
    <div>
      <h1>They tell us about: {name}</h1>
      <h5>Your mail: {email}</h5>
      <p>{message}!</p>
      
      {/* <button>
          <a href="https://www.google.com">Click me</a>
      </button> */}
    </div>
  );