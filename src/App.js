import Steps from "./components/steps";
import Doctors from "./components/doctors";
import Feedback from "./components/feedback";
import Footer from "./components/footer";
import Header from "./components/header";
import HomeApp from "./components/home-app";
import Landing from "./components/landing";
import About from "./components/about";
import Importance from "./components/importance";


function App() {
  return (
	  <div className="">
		  <Header />
		  <Landing />
		  <About />
		  <Importance />
		  <Steps />
		  <Feedback /> 
		  <Doctors />
		  <HomeApp />
		  <Footer />
		  
      </div>
  );
}

export default App;
