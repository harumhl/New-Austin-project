import "rsuite/dist/rsuite.min.css";
import { Container, Header, Content, Footer } from "rsuite";

import "./App.css";
import Overview from "./texts/overview";
import V1 from "./texts/v1";

function App() {
  return (
    <Container style={{ textAlign: "center", height: "100vh" }}>
      <Header>
        <h1 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
          "New Austin" manifesto
        </h1>
        <Overview />
        <div style={{ paddingTop: "30px" }}></div>
      </Header>
      <Content>
        <V1 />
      </Content>
      <Footer style={{ bottom: 0 }}>
        Context: I plan on building this city once I win $100 million on lottery
        (or any other means). "New Austin" is an arbitrary choice of the name
        for the city and may change (though I believe it conveys the message well).
      </Footer>
    </Container>
  );
}

export default App;
