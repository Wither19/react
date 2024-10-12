/* eslint-disable react/prop-types */

function WholeBunchaLineBreaks(props) {
	const lineBreaks = [];
	for (let b = 0; b < props.breaks; b++) {
		lineBreaks.push(<br key={b} />);
	}

	return <>{lineBreaks}</>;
}

export default WholeBunchaLineBreaks;
