import { Panel } from "rsuite";

import "./overview.css";

function Overview() {
  return (
    <div id="overview">
      <p>
        This manifesto gives us an overview and the details of building a
        progressive, inclusive and well thought-out city
      </p>
      <p>The top four ideas are:</p>
      <Panel header="Universal Basic Income" collapsible bordered>
        <p className="m-0">
          We want to live in a world where we don't have to worry about forcing
          ourselves to work just to earn money for food and housing. With
          monthly universal basic income, you will get enough stipends to live
          in a small apartment with enough simple food to survive.
        </p>
        <br />
        <div style={{ textAlign: "justify" }}>
          <p>
            We believe this works because people are not minimalistic (right
            now). People want to live nicer than what is given to them.
          </p>
          <ul style={{ textAlign: "justify", listStylePosition: "inside" }}>
            <li>We are not talking about sports cars, castles, rockets here</li>
            <li>BUT</li>
            <li>clothes</li>
            <li>accessories (including tattoos and piercings)</li>
            <li>traveling</li>
            <li>nicer apartment</li>
            <li>diverse foods</li>
            <li>(better) electronics</li>
            <li>any form of convenience</li>
            <li>etc...</li>
          </ul>
        </div>
        <p>
          In their best conditions, most people will be excited to <i>work</i>.
          And the community tax will be able to fund the universal basic income,
          which will also be ready for themselves if they want to take a break
          from motivated life.
        </p>
      </Panel>
      <Panel header="Sense of Community" collapsible bordered>
        <p className="m-0">
          We yarn to belong somewhere and the capitalistic world discourages us
          from having time to join a community ahd have fun.
        </p>
        <br />
        <ul style={{ textAlign: "justify", listStylePosition: "inside" }}>
          <li>
            There will be apartment RAs who would help you meet and connect with
            your neighbors - Just like many college dorms have RAs (Resident
            Assistants), our RAs will host various events in your apartment
          </li>
          <li>
            There will be many club-like activities where everyone would be
            encouraged to be a part of one at least (e.g. crochet, music,
            reading)
          </li>
        </ul>
      </Panel>
      <Panel header="Inclusive to All walks of life" collapsible bordered>
        <p className="m-0">
          Being inclusive is important, but we don't have enough resources to
          understand other people
        </p>
        <ul style={{ textAlign: "justify", listStylePosition: "inside" }}>
          <li>
            Each student will be required to master a second language by the
            time they graduate high school
          </li>
          <li>
            There will be community classes where you can learn and practice
            your language of choice (e.g. ASL)
          </li>
          <li>
            There will be community gatherings where people can share their
            different upbringing to other folks in the community
          </li>
        </ul>
      </Panel>
      <Panel header="Walkable to all locations" collapsible bordered>
        <p className="m-0">
          Car-centric culture in America created obesity problems as well as
          many others and we want more intimate and close neighborhoods and
          cities now
        </p>
        <ul style={{ textAlign: "justify", listStylePosition: "inside" }}>
          <li>There will be no cars allowed in the town</li>
          <li>
            Only emergency personnel can ride electronic vehicles (e.g. E-bike)
          </li>
          <li>
            All logistics will happen underground (e.g. goods delivery to
            stores)
          </li>
        </ul>
      </Panel>
    </div>
  );
}

export default Overview;
