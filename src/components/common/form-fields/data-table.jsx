import React from "react";

export const Column = ({ title }) => {
	return <th scope="col">{title}</th>;
};

const DataTable = ({ title, children }) => {
	// children korumali bir prop oldugu icin uzerinde degisiklik yapmaya izin vermez
	// degisiklik yapabilmek icin kopyasini olusturduk
	const columns = [...children];

	return (
		<div className="card">
			<div className="card-body">
				<h3 className="card-title">{title}</h3>

				<table className="table table-striped ">
					<thead>
						<tr>
							{columns.map((item) => (
								<Column
									key={item.props.title}
									{...item.props}
								/>
							))}
						</tr>
					</thead>
					<tbody>
						<tr className="">
							<td scope="row">R1C1</td>
							<td>R1C2</td>
							<td>R1C3</td>
						</tr>
						
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default DataTable;
