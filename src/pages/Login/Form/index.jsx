import { Form } from "./style";
import { formSchema } from "../../../validators/login";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

function FormContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <Form onSubmit={handleSubmit()}>
      <div className="container-input ">
        <label className={"label"}>Email</label>
        <input
          className="input-email"
          type="text"
          placeholder="Your Email"
          {...register("email")}
        />
      </div>
      <label className={errors.email ? "error" : "no-error"}>
        {errors.email?.message}
      </label>
      <div className="container-input ">
        <label className={"label"}>Password</label>
        <input
          type="password"
          className="input-password"
          placeholder="Your Password"
          {...register("password")}
        />
      </div>
      <label className={errors.password ? "error" : "no-error"}>
        {errors.password?.message}
      </label>
      <Link
        className="link"
        onClick={() => alert("fazer modal para prosseguir")}
      >
        Forgot your password?
      </Link>
      <div className="container-button">
        <button type="submit" className="btn">
          Log in
        </button>
        <Link to="/register" className="link-signup">
          Sign up
        </Link>
      </div>
    </Form>
  );
}

export default FormContact;
