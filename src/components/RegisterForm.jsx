import React from "react";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { Form } from "react-router-dom";

const RegisterForm = ({ toggleModal }) => {
	const { register, formState, handleSubmit } = useForm({
		defaultValues: {
			category: "Select your category",
			size:"Select"
		},
	});
	const errors = formState.errors;

	function onSubmit(data) {
		toggleModal();
	}

	return (
		<form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
			<div className="lg:grid grid-cols-2 items-center gap-x-8 gap-y-8 space-y-5 lg:space-y-0 ">
				<FormInput>
					<FormInput.Label>Team's Name</FormInput.Label>
					<FormInput.Text
						name="name"
						register={register}
						errors={errors}
						placeholder="Enter the name of your group"
					/>
				</FormInput>
				<FormInput>
					<FormInput.Label>Phone</FormInput.Label>
					<FormInput.Text
						name="phone"
						register={register}
						errors={errors}
						placeholder="Enter your phone number"
					/>
				</FormInput>
				<FormInput>
					<FormInput.Label>Email</FormInput.Label>
					<FormInput.Text
						name="email"
						register={register}
						errors={errors}
						placeholder="Enter your email address"
					/>
				</FormInput>
				<FormInput>
					<FormInput.Label>Project Topic</FormInput.Label>
					<FormInput.Text
						name="topic"
						register={register}
						errors={errors}
						placeholder="What is your group project topic"
					/>
				</FormInput>

				<div className=" col-span-2 flex justify-between gap-x-4 lg:gap-x-8">
					<FormInput>
						<FormInput.Label>Category</FormInput.Label>
						<FormInput.Select
							name="category"
							register={register}
							errors={errors}
							options={["Select your category", "option1", "option2"]}
						/>
					</FormInput>
					<FormInput>
						<FormInput.Label>Group Size</FormInput.Label>
						<FormInput.Select
							name="size"
							register={register}
							errors={errors}
							options={["Select", "option1", "option2"]}
						/>
					</FormInput>
				</div>
			</div>
			<p className=" text-xs md:text-sm text-pink">
				Please review your registration details before submitting
			</p>
			<div className=" flex items-start gap-x-2">
				<FormInput.CheckBox
					name="policy"
					id="policy"
					register={register}
					errors={errors}
				/>
				<FormInput.Label htmlFor="policy">
					<span className="text-xs md:text-sm">
						I agreed with the event terms and conditions and privacy policy
					</span>
				</FormInput.Label>
			</div>
			<div className=" flex justify-center lg:justify-stretch">
				<Button full>Register</Button>
			</div>
		</form>
	);
};

export default RegisterForm;
