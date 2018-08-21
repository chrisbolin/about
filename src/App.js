import React, { Component } from "react";
import Link from "./Link";
import Rocket from "./Rocket";
import "./App.css";

export default class App extends Component {
  componentDidMount() {
    console.log(`what's up, nerds`);
  }
  render() {
    return (
      <div className="page">
        <p className="big">
          {"👋"}
          Hi, <Link sameWindow>Chris</Link> here. I’m a software engineer and
          artist in Colorado. I'm the Director of Engineering for{" "}
          <Link>Formidable</Link> Denver and the Founding Editor of{" "}
          <Link>The Disconnect</Link>. Recent personal projects include{" "}
          <Link>Offline Only</Link>, <Link>Tessellate</Link>,{" "}
          <Link>Skycoins</Link>, and <Link>Elements</Link>. My work has been in{" "}
          <Link>Vice</Link>, <Link>Lifehacker</Link>, the <Link>CBC</Link>,{" "}
          <Link>CJR</Link>, <Link>Le Monde</Link>, and <Link>The Next Web</Link>
          .
        </p>
        <div className="body">
          <p>
            I have a Master’s in <Link>Computational Engineering</Link> from{" "}
            <Link>MIT</Link> where my research applied{" "}
            <Link>numerical simulation to environmental impact estimation</Link>
            . As an undergraduate I studied <Link>Mechanical Engineering</Link>{" "}
            at the <Link>University of Nebraska</Link> and researched
            computational heat transfer.
          </p>
          <p>
            Previously I was the first engineer at <Link>Jumpshell</Link>, the
            lead data scientist at <Link>Autotegrity</Link>, and an engineer at{" "}
            <Link>National Instruments</Link>.
          </p>
          <p>
            I love teaching, mentoring, and presenting. I’ve taught at MIT,{" "}
            <Link>Girl Develop It</Link>, and <Link>Startup Institute</Link> and
            tutored high school students in mathematics and environmental
            studies. I've spoken at <Link>DinosaurJS</Link> and a number of
            meetups.
          </p>
          <p>
            You can see my photography on <Link>Instagram</Link> and{" "}
            <Link>Unsplash</Link>, browse my <Link>travel photoblog</Link>,
            check out my <Link>book of abandoned places</Link>, hear me argue
            with my dad about politics on <Link>All Things Considered</Link>,
            see some of my code experiments on <Link>CodePen</Link>, and read{" "}
            <Link>some of my writing</Link> right here.
          </p>
          <p>
            Want to get in touch? Hit me up on <Link>Twitter</Link> or{" "}
            <Link>email me</Link>. I’ll probably miss your LinkedIn message.
          </p>
          <Rocket />
        </div>
      </div>
    );
  }
}
