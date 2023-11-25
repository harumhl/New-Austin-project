import "rsuite/dist/rsuite.min.css";
import { Container, Header, Content, Footer, Panel } from "rsuite";

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
        <Overview />
        <div style={{ paddingTop: "30px" }}></div>
      </Header>
      <Content>
        <V1 />
      </Content>
      <Footer style={{ bottom: 0 }}>
        <Panel
          header="Sharing Feedback"
          collapsible
          bordered
          defaultExpanded={true}
        >
          <p className="m-0">
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
          </p>
        </Panel>
        <Panel header="Footer" collapsible bordered>
          <p className="m-0">
            Context: I plan on building this city once I win $100 million or
            more on lottery (or any other means).
            <br />
            <br />
            I've been living in Austin for 6 years and I heard that it is the
            best city in Texas, which I agree, but I believe we can do better.
            "New Austin" is an arbitrary choice of the name for the city and may
            change (though I believe it conveys the message well); originally I
            thought of "New Amsterdam" since Amsterdam has a better reputation
            but I've never been there so I thought it was a bit of a stretch...
            <br />
            <br />
            You can find the source code (aka the code and the history of this
            website){" "}
            <a
              href="https://github.com/harumhl/New-Austin-project"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            <br />
            <br />
            If you are an average Joe, you don't need to try sending me money.
            However, if you are a millionaire or a billionaire and want to
            support this project with no strings attached, you can contact me at
            haru.mhl@gmail.com to set up a wire transfer. You can send me
            $10,000 to my email via PayPal to show your seriousness if you want
            to kick off the wire transfer process faster. It'll be a no strings
            attached donation (which means you don't automatically become a
            future resident or have a bigger say in building this city), but you
            will get your name recognized on this website (which would also help
            the transparency in finance too).
            <br />
            <br />
            Donations so far: None
          </p>
        </Panel>
      </Footer>
    </Container>
  );
}

export default App;
