import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "@/assets/image/logos/logo-letter.svg";
import { formSchema } from "@/validators/drop";
import { StyledFooter, DivOne, DivTwo, DivTree } from "./style";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { IFormDrop } from "@/interfaces/FormDrop/IFormDrop";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormDrop>({
    resolver: yupResolver(formSchema),
  });
  return (
    <StyledFooter>
      <DivOne>
        <div className="container">
          <div className="content-left">
            <p className="title">Never miss a drop.</p>
            <p className="paragrafh">
              Sign up for the latest news, drops and collectibles.
            </p>
          </div>
          <form className="content-right" onSubmit={handleSubmit(() => { })}>
            <label className={errors.email ? "error" : "no-error"}>
              {errors.email?.message}
            </label>{" "}
            <div>
              {" "}
              <input
                type="text"
                placeholder="Email Address"
                {...register("email")}
              />{" "}
              <button type="submit">
                Subscribe Nowﾠ
                <FaExternalLinkAlt />
              </button>
            </div>
          </form>
        </div>
      </DivOne>
      <DivTwo>
        <div className="content-left">
          <Image
            src={logo}
            width="100"
            height="100"
            alt="logo-prey"
          ></Image>
          <p>
            We provide the best vulnerability and security experiences on the
            market.
          </p>
          <ul>
            <button>
              <FaFacebookF />
            </button>
            <button>
              <FaTwitter />
            </button>
            <button>
              <FaInstagram />
            </button>
            <button>
              <FaLinkedinIn />
            </button>
          </ul>
        </div>
        <div className="content-right">
          <div>
            <p>Company</p>
            <Link href="/about" className="link">
              About Us
            </Link>
            <Link href="/shop" className="link">
              Our Collectibles
            </Link>
            <Link href="/blog" className="link">
              Our Blog
            </Link>
          </div>
          <div>
            <p>Page Links</p>
            <Link href="/" className="link">
              Home
            </Link>
            <Link href="/about" className="link">
              About
            </Link>
            <Link href="/shop" className="link">
              Shop
            </Link>
            <Link href="/blog" className="link">
              Blog
            </Link>
          </div>
          <div>
            <p>Solution</p>
            <Link href="" className="link">
              Security flaws
            </Link>
            <Link href="" className="link">
              Vulnerabilities
            </Link>
            <Link href="" className="link">
              Infrastruture
            </Link>
            <Link href="" className="link">
              Threat Hunter
            </Link>
            <Link href="" className="link">
              Disaster Planning
            </Link>
          </div>
        </div>
      </DivTwo>
      <DivTree>
        <p>Copyright © {new Date().getFullYear()} YRPrey. All rights reserved.</p>
      </DivTree>
    </StyledFooter>
  );
}

export default Footer;
