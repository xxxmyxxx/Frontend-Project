import DataTable, { Column } from "@/components/common/form-fields/data-table";
import Link from "next/link";
import React from "react";

const AdminList = ({ data }) => {
	return (
		<div className="container">
			<Link href="/dashboard/admin/new" className="btn btn-primary mb-3">
				New
			</Link>
            <DataTable title="Admin List">
                <Column title="First Name"/>
                <Column title="Last Name"/>
                <Column title="Username"/>
            </DataTable>
		</div>
	);
};

export default AdminList;
