import sites from "./sites.js";

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

export default SiteList;
