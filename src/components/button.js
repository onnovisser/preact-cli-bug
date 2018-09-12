import { h } from "preact";
import CompWithRenderProp from "./compWithRenderProp";

function Button({ onClick }) {
  return (
    <CompWithRenderProp
      render={() => <button onClick={onClick}>Click</button>}
    />
  );
}

export default Button;
