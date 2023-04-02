import { useEffect, useState } from "react";
import FeedLoading from "./components/feed/FeedLoading";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const apiUrl = process.env.REACT_APP_API_URL

function App() {

  const [appState, setAppState] = useState({
		loading: true,
		posts: null,
	});

	useEffect(() => {
		setAppState({ ...appState, loading: true })
		fetch(apiUrl)
			.then((data) => data.json())
			.then((posts) => {
				setAppState({ loading: false, posts: posts });
			});
	}, [setAppState]);
  
  return (
    <>
    <Navbar />
    <Hero />
    <FeedLoading appState={appState} />
    </>
  );
}

export default App;
