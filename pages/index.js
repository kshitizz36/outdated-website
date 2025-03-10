import { function1, function2 } from "library";

export default function Component() {
  // Traditional way of declaring state variables
  var state = { 
    prop1: function1()
  }

  return (
    <div>
      {/* using dangerouslySetInnerHTML: not recommended */} 
        <h1 dangerouslySetInnerHTML={{ __html: "Welcome to My Website" }}></h1>
        <p>This is a basic example.</p>
    </div>
  )
}
