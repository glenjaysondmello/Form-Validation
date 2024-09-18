import React from "react";
import { useForm } from "react-hook-form";
import "./form.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const password = watch("password");

  return (
    <div id="main">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            {...register("name", {
              required: "Name is Required",
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email is Invalid",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: "Password is Required",
              minLength: { value: 6, message: "Password must be 6 characters" },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirm"
            {...register("confirm", {
              required: "Confirm Password is Required",
              validate: (value) =>
                value === password || "Password do not match",
            })}
          />
          {errors.confirm && <span>{errors.confirm.message}</span>}
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            name="age"
            {...register("age", {
              required: "Age is required",
              min: { value: 18, message: "Age must be more than 18 or more" },
              validate: (value) => isNaN(value) && "Age must be a Number",
            })}
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
          <label>Gender:</label>
          <select
            name="gender"
            {...register("gender", {
              required: "Gender is required",
            })}
          >
            <option value="" key="">
              Select Gender
            </option>
            <option value="male" key="">
              Male
            </option>
            <option value="female" key="">
              Female
            </option>
          </select>
          {errors.gender && <span>{errors.gender.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
