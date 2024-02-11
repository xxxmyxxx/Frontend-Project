import LoadingList from "@/components/common/misc/loading-list";
import Spacer from "@/components/common/misc/spacer";
import PageHeader from "@/components/common/page-header";
import React from "react";

const Loading = () => {
	return (
		<>
			<PageHeader title="Assistant" />
			<Spacer height={50} />
			<LoadingList
				rowCount={5}
				colCount={5}
				showButton={true}
                buttonTitle="New"
				title="Assitant List"
			/>
			<Spacer />
		</>
	);
};

export default Loading;