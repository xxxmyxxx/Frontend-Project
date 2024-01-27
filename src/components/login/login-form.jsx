import React from "react";
import "./login-form.scss";
import SubmitButton from "../common/form-fields/submit-button";
import { initialResponse } from "@/helpers/form-validation";

const LoginForm = () => {
	const [state, dispatch] = useFormState(createMessageAction, initialResponse);

	return (
		<div className="container login-form">
			<div className="row justify-content-center ">
				<div className="col-md-8 col-lg-6">
					<div className="card">
						<div className="card-body">
							<h5>Please enter your username and password!</h5>

							<form action={dispatch} noValidate>
								<div className={`form-floating mb-3 ${state.errors.username ? "is-invalid" : "" }`}>
									<input
										type="text"
										className="form-control"
										id="username"
										name="username"
										placeholder="Enter your username"
									/>
									<label htmlFor="username">
										Enter your username
									</label>
                                    <div className="invalid-feedback">{state.errors.username}</div>
								</div>

                                <div className={`form-floating mb-3 ${state.errors.password ? "is-invalid" : "" }`}>
									<input
										type="text"
										className="form-control"
										id="password"
										name="password"
										placeholder="Enter your password"
									/>
									<label htmlFor="password">
										Enter your password
									</label>
                                    <div className="invalid-feedback">{state.errors.password}</div>
								</div>
                                <SubmitButton title="Login"/>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;