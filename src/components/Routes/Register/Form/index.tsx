import { Form } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "@/validators/register";
import Link from "next/link";
import { IFormRegister } from "@/interfaces/IFormRegister/IFormRegister";

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegister>({
    resolver: yupResolver(formSchema),
  });

  return (
    <Form onSubmit={handleSubmit(() => {})}>
      <div className="container-input ">
        <label className={"label"}>Email</label>
        <input
          className="input-email"
          type="text"
          placeholder="example@gmail.com"
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
          placeholder="***********"
          {...register("password")}
        />
      </div>
      <label className={errors.password ? "error" : "no-error"}>
        {errors.password?.message}
      </label>
      <p>
        By signing up, you agree to our{" "}
        <span className="fictitious-terms">Terms</span> and{" "}
        <span className="fictitious-terms">Privacy Policy</span>.
      </p>
      <div className="container-button">
        <button type="submit" className="btn">
          Sign up
        </button>
        <Link href="/login" className="link-signup">
          Log in
        </Link>
      </div>
    </Form>
  );
};

export default FormRegister;
