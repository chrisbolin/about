import React, { Component } from "react";

const links = {
  Chris: "https://chris.bolin.co/",
  "The Disconnect": "https://thedisconnect.co/",
  "Computational Engineering": "https://computationalengineering.mit.edu/",
  Formidable: "https://formidable.com/",
  MIT: "https://mit.edu/",
  Lifehacker:
    "https://lifehacker.com/you-cant-read-this-website-until-you-turn-off-your-inte-1822776654",
  "Offline Only": "https://chris.bolin.co/offline/",
  Vice:
    "https://motherboard.vice.com/en_us/article/kzzgjn/this-website-only-works-when-youre-offline",
  CBC:
    "http://www.cbc.ca/radio/spark/want-to-look-at-this-guy-s-website-go-offline-1.4281329",
  "Le Monde":
    "http://www.lemonde.fr/big-browser/article/2017/08/29/et-si-se-deconnecter-vous-aidait-a-mieux-profiter-des-richesses-d-internet_5177910_4832693.html",
  "The Next Web":
    "https://thenextweb.com/insider/2017/08/21/this-manifesto-against-internet-addiction-can-only-be-viewed-offline/",
  Tessellate: "https://chris.bolin.co/tessellate/",
  Skycoins: "https://chris.bolin.co/skycoins/",
  "travel photoblog": "https://rookievagabonds.tumblr.com/",
  "numerical simulation to environmental impact estimation":
    "http://dspace.mit.edu/handle/1721.1/82189",
  "Mechanical Engineering": "http://engineering.unl.edu/mme/",
  "University of Nebraska": "http://www.unl.edu/",
  Jumpshell: "https://www.jumpshell.com/",
  Autotegrity: "https://www.cogolabs.com/portfolio/autotegrity",
  "National Instruments": "http://www.ni.com/",
  "Girl Develop It": "https://www.girldevelopit.com/",
  "Startup Institute": "https://www.startupinstitute.com/",
  Instagram: "https://www.instagram.com/bolinchris/",
  Unsplash: "https://unsplash.com/@chrisbolin",
  "book of abandoned places": "http://www.blurb.com/books/1234410-shipwrecked",
  "All Things Considered":
    "http://www.npr.org/2016/07/22/487078911/liberal-son-attends-gop-convention-with-delegate-dad",
  "some of my writing": "https://chris.bolin.co/words/",
  CodePen: "https://codepen.io/chrisbolin/",
  Twitter: "https://twitter.com/bolinchris",
  "email me": "mailto:bolin.chris@gmail.com"
};

export default class Link extends Component {
  componentDidMount() {
    this.rect = this.element.getBoundingClientRect();
    this.forceUpdate();
  }
  style() {
    if (!this.rect) return;

    const hue = Math.round(
      // hue start: 125 deg
      // over the entire length of the height "rotate" color by 1000 deg
      125 + 1000 * (this.rect.y / document.body.clientHeight)
    );
    return {
      backgroundColor: `hsl(${hue}, 100%, 93%)`
    };
  }
  render() {
    const { children, sameWindow } = this.props;

    const href = links[children];

    if (!href) return "";

    return (
      <a
        href={href}
        target={sameWindow ? "_self" : "_blank"}
        ref={element => {
          this.element = element;
        }}
        style={this.style()}
      >
        {children}
      </a>
    );
  }
}
