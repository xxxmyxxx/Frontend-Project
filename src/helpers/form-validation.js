export const getYupErrors = (errors) => {
	const errObj = {};
	errors.forEach((error) => (errObj[error.path] = error.message));

	return {
		success: false,
		message: "",
		errors: errObj,
	};
};

export const convertFormDataToJson = (formData) =>
	Object.fromEntries(formData.entries());
