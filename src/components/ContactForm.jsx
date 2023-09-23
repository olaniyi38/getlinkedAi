import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import Button from "./Button";

const ContactForm = () => {
	const { register, formState, handleSubmit } = useForm();
	const errors = formState.errors;

	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<form className="flex flex-col gap-y-6" onSubmit={handleSubmit(onSubmit)}>
			<FormInput>
				<FormInput.Label>First Name</FormInput.Label>
				<FormInput.Text name="name" register={register} errors={errors} full />
			</FormInput>
			<FormInput>
				<FormInput.Label>Topic</FormInput.Label>
				<FormInput.Text name="topic" register={register} errors={errors} full />
			</FormInput>
			<FormInput>
				<FormInput.Label>Email</FormInput.Label>
				<FormInput.Text name="email" register={register} errors={errors} full />
			</FormInput>
			<FormInput>
				<FormInput.Label>Message</FormInput.Label>
				<FormInput.TextArea
					name="message"
					register={register}
					errors={errors}
					full
				/>
			</FormInput>
			<Button>Submit</Button>
		</form>
	);
};

export default ContactForm;
