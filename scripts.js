const { useState, useEffect } = React;
const app = document.querySelector("#root");

function CoolHeading(props) {
	const bigAndBold = "display-1";
	const smol = "display-3";

	const [headingSize, setHeading] = useState(false);

	const headingStyle = {
		flex: [
			"d-flex flex-row justify-content-center transition-header",
			"d-flex flex-row justify-content-center",
		],
		blurb: ["blurb transition-header", "blurb"],
	};

	var BlurbTag = props.blurbTag ? props.blurbTag : "p";

	var blurbText = props.blurb ? props.blurb : "How tough are ya";

	return (
		<div
			onClick={() => {
				setHeading((headingSize) => !headingSize);
			}}
			className="non-select">
			<div
				className={props.smooth ? headingStyle.flex[0] : headingStyle.flex[1]}>
				<div className={headingSize ? bigAndBold : smol}>
					{props.text ? props.text : "Welcome to the landing page"}
				</div>
			</div>
			<br />
			<div
				className={props.smooth ? headingStyle.blurb[0] : headingStyle.blurb[1]}
				style={{ opacity: headingSize ? "1" : "0" }}>
				<BlurbTag>{blurbText}</BlurbTag>
			</div>
		</div>
	);
}

function SiteList() {
	return (
		<>
			<h1>Site List</h1>
			<div className="d-flex flex-row justify-content-center flex-wrap site-list-wrapper">
				{sites.map((site, i) => (
					<a key={i} className="site-link" href={site.url}>
						<div style={{ textAlign: "center" }}>
							{site.siteName}
							<br />
							<span className="desc-text">{site.desc}</span>
						</div>
					</a>
				))}
			</div>
		</>
	);
}

// Add Random Bible Verse using API that has a link to BibleGateway!

function BibleApiRef() {
	let [fetchedVerse, setFetchedVerse] = useState([]);
	let [selectedVerse, setSelectedVerse] = useState("John 1:1");

	function grabVerse(event) {
		const verseInput = document.querySelector("input#bible-verse-selection");
		if (event.which == 13 || event.target.id == "verse-select") {
			fetch(`https://bible-api.com/${verseInput.value}`)
				.then((response) => response.json())
				.then((data) => {
					setFetchedVerse(data);
				});
			verseInput.value = "";
		} else if (event.target.id == "verse-random") {
			fetch(`https://bible-api.com?random=verse`)
				.then((response) => response.json())
				.then((data) => {
					setFetchedVerse(data);
				});
		}
	}

	useEffect(() => {
		fetch(`https://bible-api.com/${selectedVerse}`)
			.then((response) => response.json())
			.then((data) => {
				setFetchedVerse(data);
			});
	}, []);

	return (
		<>
			<div style={{ textAlign: "center" }}>
				<h1>Bible Verse Reference</h1>
				<sub>
					Powered by Tim Morgan's <a href="https://bible-api.com">Bible API</a>
				</sub>
				<h2 className="move-up">{fetchedVerse.reference}</h2>
				<div className="bible-verse">
					{fetchedVerse.verses
						? fetchedVerse.verses.map((verse, i) => (
								<React.Fragment key={i}>
									<b className="verse-number">{verse.verse}</b>
									<span>{verse.text}</span>
								</React.Fragment>
						  ))
						: null}
				</div>
				<a
					target="_blank"
					href={`https://biblegateway.com/passage/?search=${fetchedVerse.reference}`}>
					{fetchedVerse.reference} on BibleGateway
				</a>
			</div>
			<div className="d-flex flex-row justify-content-center">
				<input id="bible-verse-selection" type="text" onKeyDown={grabVerse} />
			</div>
			<div
				id="bible-buttons"
				className="d-flex flex-row justify-content-evenly">
				<button
					id="verse-select"
					className="bible-verse-select-button"
					onClick={grabVerse}>
					Go to Verse
				</button>
				<button
					id="verse-random"
					className="bible-verse-select-button"
					onClick={grabVerse}>
					Get a Random Verse
				</button>
			</div>
		</>
	);
}
function WholeBunchaLineBreaks(props) {
	const getBreaksAmount = props.breaks ? breaks : 1;
	const lineBreaks = [];
	for (let b = 0; b < getBreaksAmount; b++) {
		lineBreaks.push(<br key={b} />);
	}

	return <>{lineBreaks}</>;
}

function MeApp() {
	return (
		<>
			<CoolHeading smooth={true} />
			<SiteList />
			<WholeBunchaLineBreaks breaks={3} />
			<BibleApiRef />
		</>
	);
}

ReactDOM.render(<MeApp />, app);
