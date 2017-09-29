import React, { Component } from 'react';
import './App.css';

const links = {
	'Chris Bolin': 'https://chris.bolin.co/',
	'Computational Engineering': 'https://computationalengineering.mit.edu/',
	'Formidable': 'https://formidable.com/',
	'MIT': 'https://mit.edu/',
	'Offline Only': 'https://chris.bolin.co/offline/',
	'Vice': 'https://motherboard.vice.com/en_us/article/kzzgjn/this-website-only-works-when-youre-offline',
	'CBC': 'http://www.cbc.ca/radio/spark/want-to-look-at-this-guy-s-website-go-offline-1.4281329',
	'Le Monde': 'http://www.lemonde.fr/big-browser/article/2017/08/29/et-si-se-deconnecter-vous-aidait-a-mieux-profiter-des-richesses-d-internet_5177910_4832693.html',
	'The Next Web': 'https://thenextweb.com/insider/2017/08/21/this-manifesto-against-internet-addiction-can-only-be-viewed-offline/',
	'Tessellate': 'https://chris.bolin.co/tessellate/',
	'Skycoins': 'https://chris.bolin.co/skycoins/',
	'travel photography': 'https://rookievagabonds.tumblr.com/',
	'numerical simulation to environmental impact estimation': 'http://dspace.mit.edu/handle/1721.1/82189',
	'Mechanical Engineering': 'http://engineering.unl.edu/mme/',
	'University of Nebraska': 'http://www.unl.edu/',
	'Jumpshell': 'https://www.jumpshell.com/',
	'Autotegrity': 'https://www.cogolabs.com/portfolio/autotegrity',
	'National Instruments': 'http://www.ni.com/',
	'Girl Develop It': 'https://www.girldevelopit.com/',
	'Startup Institute': 'https://www.startupinstitute.com/',
	'Instagram': 'https://www.instagram.com/bolinchris/',
	'Unsplash': 'https://unsplash.com/@chrisbolin',
	'book of abandoned places': 'http://www.blurb.com/books/1234410-shipwrecked',
	'All Things Considered': 'http://www.npr.org/2016/07/22/487078911/liberal-son-attends-gop-convention-with-delegate-dad',
	'some of my writing': 'https://chris.bolin.co/words/',
	'CodePen': 'https://codepen.io/chrisbolin/',
	'Twitter': 'https://twitter.com/bolinchris',
	'email me': 'mailto:bolin.chris@gmail.com',
};

const Link = ({children}) => (
	<a href={links[children]} target="_blank">
		{links[children] ? children : <i style={{background: 'red'}}>{children}</i>}
	</a>
);

class App extends Component {
	componentDidMount() {
		console.log(`what's up, nerds`);
	}
  render() {
    return (
      <div className="page">
	      <p className="big">
					{'👋'}Hello, <Link>Chris Bolin</Link> here. I’m a software engineer and artist in Denver. I make user interfaces at <Link>Formidable</Link>.  My latest personal project <Link>Offline Only</Link> was featured in <Link>Vice</Link>, the <Link>CBC</Link>, <Link>Le Monde</Link>, and <Link>The Next Web</Link>. Other recent projects include <Link>Tessellate</Link>, <Link>Skycoins</Link>, and some <Link>travel photography</Link>.
				</p>
	      <div className="body">
					<p>
						I have a Master’s in <Link>Computational Engineering</Link> from <Link>MIT</Link> where my research applied <Link>numerical simulation to environmental impact estimation</Link>. As an undergraduate I studied <Link>Mechanical Engineering</Link> at the <Link>University of Nebraska</Link> and researched computational heat transfer.
					</p>
					<p>
						Previously I was the first empolyee at <Link>Jumpshell</Link>, the lead data scientist at <Link>Autotegrity</Link>, and an engineer at <Link>National Instruments</Link>.
					</p>
					<p>
						I love teaching and mentoring. I’ve taught at MIT, <Link>Girl Develop It</Link>, and <Link>Startup Institute</Link> and tutored high school students in mathematics and environmental studies.
					</p>
					<p>
						You can see my photography on <Link>Instagram</Link> and <Link>Unsplash</Link>, check out my <Link>book of abandoned places</Link>, hear me argue with my dad about politics on <Link>All Things Considered</Link>, see some of my code experiments on <Link>CodePen</Link>, and read <Link>some of my writing</Link> right here.
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

export default App;
