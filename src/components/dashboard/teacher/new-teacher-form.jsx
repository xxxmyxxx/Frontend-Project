"use client";
import { createTeacherAction } from "@/actions/teacher-actions";
import CancelButton from "@/components/common/form-fields/cancel-button";
import MultiSelect from "@/components/common/form-fields/multi-select";
import SubmitButton from "@/components/common/form-fields/submit-button";
import { config } from "@/helpers/config";
import { initialResponse, isInvalid } from "@/helpers/form-validation";
import { useFormState } from "react-dom";
import InputMask from "react-input-mask-next";

const NewTeacherForm = ({programs}) => {
	const [state, dispatch] = useFormState(
		createTeacherAction,
		initialResponse
	);

	return (
		<div className="container ">
			<div className="card">
				<div className="card-body">
					<div className="card-title">New</div>

					{state?.message ? (
						<div className="alert alert-danger">
							{state.message}
						</div>
					) : null}

					<form action={dispatch} noValidate>
						<div className="row">
							<div className="col-md-6 col-xl-4">
								<div className="form-floating mb-3">
									<input
										type="text"
										className={`form-control ${isInvalid(
											state.errors?.name
										)}`}
										id="name"
										name="name"
										placeholder="First Name"
									/>
									<label htmlFor="name">First Name</label>
									<div className="invalid-feedback">
										{state.errors?.name}
									</div>
								</div>
							</div>
							<div className="col-md-6 col-xl-4">
								<div className="form-floating mb-3">
									<input
										type="text"
										className={`form-control ${isInvalid(
											state.errors?.surname
										)}`}
										id="surname"
										name="surname"
										placeholder="Last Name"
									/>
									<label htmlFor="surname">Last Name</label>
									<div className="invalid-feedback">
										{state.errors?.surname}
									</div>
								</div>
							</div>
							<div className="col-md-6 col-xl-4">
								<div className="form-floating mb-3">
									<select
										className={`form-select ${isInvalid(
											state.errors?.gender
										)}`}
										id="gender"
										name="gender"
									>
										<option value="">Select</option>
										{config.genders.map((item) => (
											<option
												value={item.value}
												key={item.value}
											>
												{item.label}
											</option>
										))}
									</select>
									<label htmlFor="gender">Gender</label>
									<div className="invalid-feedback">
										{state.errors?.gender}
									</div>
								</div>
							</div>
							<div className="col-md-6 col-xl-4">
								<div className="form-floating mb-3">
									<input
										type="date"
										className={`form-control ${isInvalid(
											state.errors?.birthDay
										)}`}
										id="birthDay"
										name="birthDay"
										placeholder="Birthdate"
									/>
									<label htmlFor="birthDay">Birthdate</label>
									<div className="invalid-feedback">
										{state.errors?.birthDay}
									</div>
								</div>
							</div>
							<div className="col-md-6 col-xl-4">
								<div className="form-floating mb-3">
									<input
										type="text"
										className={`form-control ${isInvalid(
											state.errors?.birthPlace
										)}`}
										id="birthPlace"
										name="birthPlace"
										placeholder="Place of birth"
									/>
									<label htmlFor="birthPlace">
										Place of birth
									</label>
									<div className="invalid-feedback">
										{state.errors?.birthPlace}
									</div>
								</div>
							</div>
							<div className="col-md-6 col-xl-4">
								<div className="form-floating mb-3">
									<InputMask
										className={`form-control ${isInvalid(
											state.errors?.phoneNumber
										)}`}
										id="phoneNumber"
										name="phoneNumber"
										placeholder="Phone number"
										mask="999-999-9999"
									/>
									<label htmlFor="phoneNumber">
										Phone number
									</label>
									<div className="invalid-feedback">
										{state.errors?.phoneNumber}
									</div>
								</div>
							</div>
							<div className="col-md-6 col-xl-4">
								<div className="form-floating mb-3">
									<InputMask
										className={`form-control ${isInvalid(
											state.errors?.ssn
										)}`}
										id="ssn"
										name="ssn"
										placeholder="SSN"
										mask="999-99-9999"
									/>
									<label htmlFor="ssn">SSN</label>
									<div className="invalid-feedback">
										{state.errors?.ssn}
									</div>
								</div>
							</div>
							<div className="col-md-6 col-xl-4">
								<div className="form-floating mb-3">
									<input
										type="text"
										className={`form-control ${isInvalid(
											state.errors?.email
										)}`}
										id="email"
										name="email"
										placeholder="Email"
									/>
									<label htmlFor="email">Email</label>
									<div className="invalid-feedback">
										{state.errors?.email}
									</div>
								</div>
							</div>

							<div className="col-md-6 col-xl-4">
								<div className="form-check mb-3">
									<input
										className="form-check-input"
										type="checkbox"
										value="true"
										id="isAdvisorTeacher"
										name="isAdvisorTeacher"
									/>
									<label
										className="form-check-label"
										htmlFor="isAdvisorTeacher"
									>
										Is advisor teacher
									</label>
								</div>
							</div>

							<div className="col-12">
								<MultiSelect
									options={programs}
									optionValue="id"
									optionLabel="label"
									placeholder="Programs"
									id="lessonsIdList"
									error={state.errors?.lessonsIdList}
								/>
							</div>

							<div className="col-md-6 col-xl-4">
								<div className="form-floating mb-3">
									<input
										type="text"
										className={`form-control ${isInvalid(
											state.errors?.username
										)}`}
										id="username"
										name="username"
										placeholder="Username"
									/>
									<label htmlFor="username">Username</label>
									<div className="invalid-feedback">
										{state.errors?.username}
									</div>
								</div>
							</div>

							<div className="col-md-6 col-xl-4">
								<div className="form-floating mb-3">
									<input
										type="password"
										className={`form-control ${isInvalid(
											state.errors?.password
										)}`}
										id="password"
										name="password"
										placeholder="Password"
									/>
									<label htmlFor="password">Password</label>
									<div className="invalid-feedback">
										{state.errors?.password}
									</div>
								</div>
							</div>
							<div className="col-md-6 col-xl-4">
								<div className="form-floating mb-3">
									<input
										type="password"
										className={`form-control ${isInvalid(
											state.errors?.confirmPassword
										)}`}
										id="confirmPassword"
										name="confirmPassword"
										placeholder="Confirm password"
									/>
									<label htmlFor="confirmPassword">
										Confirm password
									</label>
									<div className="invalid-feedback">
										{state.errors?.confirmPassword}
									</div>
								</div>
							</div>
						</div>

						<div className="d-flex align-items-center justify-content-center gap-3">
							<CancelButton />
							<SubmitButton title="Create" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default NewTeacherForm;
