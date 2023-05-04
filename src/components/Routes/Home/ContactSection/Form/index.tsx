import { Form } from "./style";
import { formSchema } from "@/validators/contact";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormContact } from "@/interfaces/IFormContact/IFormContact";

const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormContact>({
    resolver: yupResolver(formSchema),
  });

  return (
    <Form onSubmit={handleSubmit(() => { })}>
      <label className={errors.name ? "error-column" : "no-error-column"}>
        {errors.name?.message}
      </label>
      <input
        className="input-name"
        type="text"
        placeholder="Your Name"
        {...register("name")}
      />
      <div className="input-contact">
        <div>
          <label className={errors.phone ? "error-row" : "no-error-row"}>
            {errors.phone?.message}
          </label>
          <input
            type="number"
            placeholder="Your Phone Number"
            {...register("phone")}
          />
        </div>
        <div>
          <label className={errors.mail ? "error-row" : "no-error-row"}>
            {errors.mail?.message}
          </label>
          <input type="email" placeholder="Your Mail" {...register("mail")} />
        </div>
      </div>
      <label className={errors.subject ? "error-column" : "no-error-column"}>
        {errors.subject?.message}
      </label>
      <input
        type="text"
        className="input-subject"
        placeholder="Subject"
        {...register("subject")}
      />
      <label
        className={errors.textMessage ? "error-column" : "no-error-column"}
      >
        {errors.textMessage?.message}
      </label>
      <textarea
        placeholder="Your Message"
        {...register("textMessage")}
      ></textarea>
      <button type="submit" className="btn">
        Send Message
      </button>
    </Form>
  );
};

export default FormContact;
