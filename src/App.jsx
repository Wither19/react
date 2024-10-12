import CoolHeading from "./components/CoolHeading";
import SiteList from "./components/SiteList";
import WholeBunchaLineBreaks from "./components/WholeBunchaLineBreaks";
import BibleApiRef from "./components/BibleApiRef";

import "./App.css";

function App() {
	return (
		<>
			<CoolHeading smooth={true} />
			<SiteList />
			<WholeBunchaLineBreaks breaks={4} />
			<BibleApiRef />
		</>
	);
}

export default App;
