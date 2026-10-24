import { createContext, useContext } from "react";

const UserContext = createContext(null);

export function ContextApiEx() {
  const user = {
    name: "abc",
    age: 19,
  };
  return (
    <div>
      <UserContext.Provider value={user}>
        <Grandparent />
      </UserContext.Provider>
    </div>
  );
}

const Grandparent = () => {
  return (
    <div>
      Hello from Grandparent! <Parent />
    </div>
  );
};

const Parent = () => {
  return (
    <div>
      Hello from Parent! <Child />
    </div>
  );
};

const Child = () => {
  return (
    <div>
      Hello from Child! <Grandchild />
    </div>
  );
};

const Grandchild = () => {
  const user = useContext(UserContext);
  return <div>Hello {user.name} from Grandchild!</div>;
};
