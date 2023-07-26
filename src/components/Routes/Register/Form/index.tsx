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
    <Form onSubmit={handleSubmit(() => { })}>
      <div className="container-input ">
        <label className={"label"}>Email</label>
        <div className="input-email">
          <input
            className="input-email-inside"
            type="text"
            placeholder="example@gmail.com"
            {...register("email")}
          />
        </div>
      </div>
      <label className={errors.email ? "error" : "no-error"}>
        {errors.email?.message}
      </label>
      <div className="container-input ">
        <label className={"label"}>Password</label>
        <div className="input-password">
          <input
            className="input-password-inside"
            type="password"
            placeholder="***********"
            {...register("password")}
          />
        </div>
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
        <div className="btn-sign-up">
          <button type="submit" className="btn-sign-up-inside">
            Sign up
          </button>
        </div>
        <Link href="/login" className="link-signup">
          Log in
        </Link>
      </div>
    </Form>
  );
};

export default FormRegister;
