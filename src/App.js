import React, { Component } from 'react';
import Link from './Link';
import './App.css';

export default class App extends Component {
	componentDidMount() {
		console.log(`what's up, nerds`);
	}
  render() {
    return (
      <div className="page">
	      <p className="big">
					{'👋'}Hello, <Link>Chris Bolin</Link> here. I’m a software engineer and artist in Denver. I make user interfaces at <Link>Formidable</Link>.  My latest personal project <Link>Offline Only</Link> was featured in <Link>Vice</Link>, the <Link>CBC</Link>, <Link>Le Monde</Link>, and <Link>The Next Web</Link>. Other recent projects include <Link>Tessellate</Link> and <Link>Skycoins</Link>.
				</p>
	      <div className="body">
					<p>
						I have a Master’s in <Link>Computational Engineering</Link> from <Link>MIT</Link> where my research applied <Link>numerical simulation to environmental impact estimation</Link>. As an undergraduate I studied <Link>Mechanical Engineering</Link> at the <Link>University of Nebraska</Link> and researched computational heat transfer.
					</p>
					<p>
						Previously I was the first employee at <Link>Jumpshell</Link>, the lead data scientist at <Link>Autotegrity</Link>, and an engineer at <Link>National Instruments</Link>.
					</p>
					<p>
						I love teaching and mentoring. I’ve taught at MIT, <Link>Girl Develop It</Link>, and <Link>Startup Institute</Link> and tutored high school students in mathematics and environmental studies.
					</p>
					<p>
						You can see my photography on <Link>Instagram</Link> and <Link>Unsplash</Link>, browse my <Link>travel photoblog</Link>, check out my <Link>book of abandoned places</Link>, hear me argue with my dad about politics on <Link>All Things Considered</Link>, see some of my code experiments on <Link>CodePen</Link>, and read <Link>some of my writing</Link> right here.
					</p>
					<p>
						Want to get in touch? Message me on <Link>Twitter</Link>. If you must, you could <Link>email me</Link>. But please, please do not contact me on LinkedIn.
					</p>
					<p className="last">
						{'🚀'}
					</p>
				</div>
      </div>
    );
  }
}
