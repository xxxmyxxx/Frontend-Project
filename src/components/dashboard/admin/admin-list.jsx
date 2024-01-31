import DataTable, { Column } from "@/components/common/form-fields/data-table";
import Link from "next/link";
import React from "react";

const AdminList = ({ data }) => {
	const { content, totalPages, number, size } = data;

	return (
		<div className="container">
			<Link href="/dashboard/admin/new" className="btn btn-primary mb-3">
				New
			</Link>
			<DataTable
				title="Admin List"
				dataSource={content}
				dataKey="id"
				pagination={true}
				totalPages={totalPages}
				pageNumber={number}
				pageSize={size}
			>
				<Column index={true} title="#" />
				<Column title="First Name" field="name" />
				<Column title="Last Name" field="surname" />
				<Column title="Username" field="username" />
			</DataTable>
		</div>
	);
};

export default AdminList;
