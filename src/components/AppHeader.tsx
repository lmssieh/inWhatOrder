import { useRef, useState } from "react";
import animes from "../../assets/animes.js";
import Fuse from "fuse.js";
import { Link, Outlet } from "react-router-dom";

function AppHeader() {
	const [search, setSearch] = useState("");
	const [searchResult, setSearchResult] = useState([]);

	const inputRef = useRef(null);
	const fuse = new Fuse(animes, {
		keys: ["names"],
	});

	const updateSearch = (val: string) => {
		setSearch(val);
		const fuseResult = fuse.search(val);
		console.log([...fuseResult].map((i) => i.item));
		setSearchResult([...fuseResult].map((i) => i.item));
	};

	return (
		<div className=" my-10">
			<div className="max-w-[500px] m-auto ">
				<h1 className="font-bold text-3xl text-center">In What Order</h1>
				<div className="mt-3 flex justify-center gap-1 relative w-full">
					<input
						type="text"
						placeholder="Search..."
						className="w-full px-4 py-2 rounded-md"
						value={search}
						ref={inputRef}
						onChange={(event) => updateSearch(event?.target.value)}
					/>
					<button className="bg-blue-600 text-white px-4 flex items-center justify-center rounded-md">
						Search
					</button>
					{search && (
						<div className=" mt-1 bg-white rounded-md absolute top-[100%] z-10 shadow-md w-full ">
							<ul className="children:(cursor-pointer py-2 px-2 border-b-1 border-gray-200 flex justify-center justify-between)">
								{searchResult.length > 0 &&
									searchResult.map((s) => (
										<Link to={`order/${s.fileName}`}>
											<li onClick={() => console.log(s.fileName)}>{s.name}</li>
										</Link>
									))}
							</ul>
						</div>
					)}
				</div>
			</div>

			<Outlet />
		</div>
	);
}

export default AppHeader;
