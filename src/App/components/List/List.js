import React from "react";
import { FixedSizeList } from "react-window";

import Row from "../Row";

const List = ({ allPersons }) => {
	return (
		<FixedSizeList
			height={400}
			width={300}
			itemSize={46}
			itemCount={100}
			itemData={allPersons}
		>
			{Row}
		</FixedSizeList>
	);
};

export default List;
