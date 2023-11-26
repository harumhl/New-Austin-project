import { useState } from "react";
import { Nav } from "rsuite";

function TabsAndBody({ enums, defaultEnum, title }) {
  const [active, setActive] = useState(defaultEnum);

  return (
    <div>
      {title}
      <Nav
        appearance="tabs"
        activeKey={active}
        onSelect={setActive}
        style={{ marginBottom: "20px", overflowX: "scroll" }}
      >
        {Object.keys(enums).map((enumKey) => {
          const enumVal = enums[enumKey];
          return (
            <Nav.Item eventKey={enumKey} key={enumKey}>
              {enumVal.name ?? enumKey}
            </Nav.Item>
          );
        })}
      </Nav>

      {Object.keys(enums).map((enumKey) => {
        // Rendering ALL components to allow global search
        const Component = enums[enumKey].component;
        return (
          <div
            key={enumKey}
            style={{ display: active === enumKey ? "block" : "none" }}
          >
            <Component />
          </div>
        );
      })}
    </div>
  );
}

export default TabsAndBody;
