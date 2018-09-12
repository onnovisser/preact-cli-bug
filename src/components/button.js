import { h } from "preact";
import CompWithRenderProp from "./compWithRenderProp";

function Button({ onClick }) {
  return (
    <CompWithRenderProp
      render={() => {
        const handler = onClick;
        return <button onClick={onClick}>Click</button>;
      }}
    />
  );
}

export default Button;
