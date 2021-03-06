import "../assets/styles/main.scss";

import module from "./module";
import routes from "./routes";

import "./services/spotify";

import "./components/mediaitem";
import "./components/artistcard";
import "./components/albumcard";

import "./pages/landing";
import "./pages/search";

module.routing(routes);
module.config(($locationProvider) => {
	$locationProvider.html5Mode(false);
})
module.bootstrap();

export default module.name;