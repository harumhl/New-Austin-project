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
          "New Austin" project
        </h1>
        <a
          href="https://forms.gle/WjkCCYpsVcqG6BkGA"
          target="_blank"
          rel="noreferrer"
        >
          Link to share comments
        </a>
        <br />
        <a
          href="https://forms.gle/91RtqrzZy6jByryB7"
          target="_blank"
          rel="noreferrer"
        >
          Link to sign up for more
        </a>
        <Overview />
        <div style={{ paddingTop: "30px" }}></div>
      </Header>
      <Content>
        <V1 />
      </Content>
      <Footer style={{ bottom: 0 }}>
        Context: I plan on building this city once I win $100 million on lottery
        (or any other means). "New Austin" is an arbitrary choice of the name
        for the city and may change (though I believe it conveys the message
        well).
        <br />
        <br />
        If you are an average Joe, you don't need to try sending me money.
        However, if you are a millionaire or a billionaire and want to support
        this (with no strings attached), you can contact me at
        haru.mhl@gmail.com to set up a wire transfer. You can send me $10,000 to
        my email via PayPal to show your seriousness if you want to kick off the
        wire transfer process faster. It'll be a no strings attached donation,
        but you will get your name recognized on this website (which would also
        aid the transparency purpose too).
      </Footer>
    </Container>
  );
}

export default App;
