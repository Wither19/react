/* eslint-disable react/prop-types */

import { useState } from "react";

function CoolHeading(props) {
	const bigAndBold = "display-1";
	const smol = "display-3";

	const [headingSize, setHeading] = useState(false);

	const headingStyle = {
		flex: ["d-flex flex-row justify-content-center transition-header", "d-flex flex-row justify-content-center"],
		blurb: ["blurb transition-header", "blurb"],
	};

	var smoothHeading = props.smooth ? headingStyle.flex[0] : headingStyle.flex[1];

	var smoothBlurb = props.smooth ? headingStyle.blurb[0] : headingStyle.blurb[1];

	var BlurbTag = props.blurbTag ? props.blurbTag : "p";

	var blurbText = props.blurb ? props.blurb : "How tough are ya";

	return (
		<div
			onClick={() => {
				setHeading((headingSize) => !headingSize);
			}}
			className="non-select">
			<div className={smoothHeading}>
				<div className={headingSize ? bigAndBold : smol}>
					{props.text ? props.text : "Welcome to the landing page"}
				</div>
			</div>
			<br />
			<div className={smoothBlurb} style={{ opacity: headingSize ? "1" : "0" }}>
				<BlurbTag>{blurbText}</BlurbTag>
			</div>
		</div>
	);
}

export default CoolHeading;
