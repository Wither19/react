import { useState, useEffect } from "react";
import * as React from "react";

function BibleApiRef() {
	let [fetchedVerse, setFetchedVerse] = useState([]);
	let [selectedVerse] = useState("John 1:1");

	function grabVerse(event) {
		const verseInput = document.querySelector("input#bible-verse-selection");
		if (event.which == 13 || event.target.id == "verse-select") {
			fetch(`https://bible-api.com/${verseInput.value}`)
				.then((response) => response.json())
				.then((data) => {
					setFetchedVerse(data);
				});
			verseInput.value = "";
		}
	}

	useEffect(() => {
		fetch(`https://bible-api.com/${selectedVerse}`)
			.then((response) => response.json())
			.then((data) => {
				setFetchedVerse(data);
			});
	}, [selectedVerse]);

	return (
		<>
			<div style={{ textAlign: "center" }}>
				<h1>Bible Verse Reference</h1>
				<sub>
					Powered by Tim Morgan&apos;s <a href="https://bible-api.com">Bible API</a>
				</sub>
				<h2 className="move-up">{fetchedVerse.reference}</h2>
				<div className="bible-verse">
					{fetchedVerse.verses
						? fetchedVerse.verses.map((verse, i) => (
								<React.Fragment key={i}>
									<b className="big-fancy-verse-number">{verse.verse}</b>
									<span>{verse.text}</span>
								</React.Fragment>
						  ))
						: null}
				</div>
				<a target="_blank" href={`https://biblegateway.com/passage/?search=${fetchedVerse.reference}`}>
					{fetchedVerse.reference} on BibleGateway
				</a>
			</div>
			<div className="d-flex flex-row justify-content-center">
				<input id="bible-verse-selection" type="text" onKeyDown={grabVerse} />
			</div>
			<div className="d-flex flex-row justify-content-center">
				<button id="verse-select" className="bible-verse-select-button" onClick={grabVerse}>
					Go to Verse
				</button>
			</div>
		</>
	);
}

export default BibleApiRef;
