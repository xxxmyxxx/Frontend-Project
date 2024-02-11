import LoadingList from "@/components/common/misc/loading-list";
import Spacer from "@/components/common/misc/spacer";
import PageHeader from "@/components/common/page-header";
import React from "react";

const Loading = () => {
	return (
		<>
			<PageHeader title="Messages" />
			<Spacer height={50} />
			<LoadingList
				rowCount={5}
				colCount={6}
				showButton={false}
				title="Message List"
			/>
			<Spacer />
		</>
	);
};

export default Loading;
