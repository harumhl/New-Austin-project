import { useState } from "react";
import { Nav } from "rsuite";

function getComponent(enums, active) {
  return enums[active].component;
}

function TabsAndBody({ enums, defaultEnum, title }) {
  const [active, setActive] = useState(defaultEnum);
  const BodyComponent = getComponent(enums, active);

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

      <BodyComponent style={{paddingRight: '30px'}} />
    </div>
  );
}

export default TabsAndBody;
