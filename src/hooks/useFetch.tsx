import { useEffect, useState } from "react";
function useFetch(url: string, id: string) {
	const [data, setData] = useState({});
	const [isLoading, setisLoading] = useState(true);

	useEffect(() => {
		setisLoading(true);

		async function getAnimeData() {
			const data = await fetch(url);
			const res = await data.json();
			setData(res);
			setisLoading(false);
			return res;
		}

		getAnimeData().then((e) => console.log(e, isLoading));
	}, [id]);

	return [data, setData, isLoading];
}

export default useFetch;
