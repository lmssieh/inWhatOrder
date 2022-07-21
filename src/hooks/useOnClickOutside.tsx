import { useEffect } from "react";

function useOnClickOutside(ref, handler) {
	const listener = (event) => {
		if (ref.current == event.target || ref.current.contains(event.target))
			return;
		console.log("clicked");
		handler(event);
	};

	useEffect(() => {
		console.log(ref, handler);

		document.body.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);

		return () => {
			document.body.removeEventListener("mousedown", listener);
			document.addEventListener("touchstart", listener);
		};
	}, [ref]);
}

export default useOnClickOutside;
