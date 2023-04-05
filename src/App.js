import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Post from "./components/post/Post";
import { Routes, Route } from "react-router-dom";
import FeedRoot from "./components/feed/FeedRoot";
import Error from "./components/error/Error";

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
	<Routes>
		<Route path="/" element={<FeedRoot appState={appState} />} />
		<Route path="/posts/:postId" element={<Post appState={appState} />} />
		<Route path="*" element={<Error />} />
	</Routes>
    </>
  );
}

export default App;
