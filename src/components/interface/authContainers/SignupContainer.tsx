"use client";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import Link from "next/link";
import IllustrationContainer from "./IllustrationContainer";
import { useState } from "react";
import { signupSchema } from "../../../../lib/validation/auth";
import { useRouter } from "next/navigation";

export default function SignupContainer() {
  const router = useRouter();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordView, setPasswordView] = useState(false);
  const [confirmPasswordView, setConfirmPasswordView] = useState(false);

  const [errors, setErrors] = useState<{
    displayName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!errors) setLoading(true);

    const result = signupSchema.safeParse({
      displayName,
      email,
      password,
      confirmPassword,
    });

    if (!result.success) {
      const fielderrors = result.error.flatten().fieldErrors;

      setErrors({
        displayName: fielderrors.displayName?.[0],
        email: fielderrors.email?.[0],
        password: fielderrors.password?.[0],
        confirmPassword: fielderrors.confirmPassword?.[0],
      });

      return;
    }

    setErrors({});

    try {
      const response = await fetch("api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          displayName: displayName.trim(),
          email,
          password,
          confirmPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setDisplayName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        console.log(data.message);

        router.push("/chats");
      } else {
        throw Error("Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  console.log(loading);
  console.log(errors);

  return (
    <main className="font-sans min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#EFEEEC]">
      <div className="flex flex-col justify-center py-20">
        <div className="w-[90%] sm:w-[50%] md:w-[35%] lg:w-[70%] xl:w-[50%] mx-auto 2xl:w-100">
          <div className="plain-flex gap-2 mb-6 w-fit mx-auto">
            <Icon
              icon="fluent:chat-multiple-28-filled"
              className="text-primary text-[1.6rem]"
            />
            <p className="font-medium text-[0.9rem] text-black">Chadda</p>
          </div>

          <motion.h1
            initial="init"
            whileInView="slide"
            viewport={{
              once: true,
            }}
            custom={0}
            className="text-black text-center font-medium text-[1.2rem] mb-1"
          >
            Create an account
          </motion.h1>
          <motion.p
            initial="init"
            whileInView="slide"
            viewport={{
              once: true,
            }}
            custom={0.5}
            className="text-gray-600 mb-6 text-center text-smaller"
          >
            Join Chadda and start real-time conversations.
          </motion.p>

          <form className="mb-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1 mb-5">
              <label
                className="text-smaller font-medium"
                htmlFor="display-name"
              >
                Display name
              </label>
              <input
                required
                type="text"
                id="display-name"
                placeholder="Enter your display name"
                onChange={(e) => setDisplayName(e.target.value.trim())}
                className={`input-style input-shadow ${
                  errors.displayName ? "border-red-500" : "border-[#d3d3d3]"
                } border-[#d3d3d3]`}
              />

              {errors.displayName && (
                <p className="text-smallest font-medium text-red-500">
                  {errors.displayName}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <label className="text-smaller font-medium" htmlFor="email">
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value.trim())}
                className={`input-style input-shadow ${
                  errors.email ? "border-red-500" : "border-[#d3d3d3]"
                }`}
              />

              {errors.email && (
                <p className="text-smallest font-medium text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <div className="custom-flex">
                <label className="text-smaller font-medium" htmlFor="email">
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  required
                  type={passwordView ? "text" : "password"}
                  id="password"
                  placeholder="Create a password"
                  onChange={(e) => setPassword(e.target.value)}
                  className={`input-style input-shadow ${
                    errors.password ? "border-red-500" : "border-[#d3d3d3]"
                  } w-full pr-9`}
                />
                <button
                  onClick={() => setPasswordView((prev) => !prev)}
                  type="button"
                  className="top-0 bottom-0 rounded-md grid place-items-center text-[1.2rem] absolute px-2 right-0"
                >
                  <Icon
                    className="text-[#636363]"
                    icon={
                      passwordView
                        ? "iconoir:eye-closed"
                        : "fluent:eye-24-regular"
                    }
                  />
                </button>
              </div>

              {errors.password && (
                <p className="text-smallest font-medium text-red-500">
                  {errors.password}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <div className="custom-flex">
                <label className="text-smaller font-medium" htmlFor="email">
                  Confirm password
                </label>
              </div>
              <div className="relative">
                <input
                  required
                  type={confirmPasswordView ? "text" : "password"}
                  id="confirm-password"
                  placeholder="Confirm your password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`input-style input-shadow ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-[#d3d3d3]"
                  } w-full pr-9`}
                />
                <button
                  onClick={() => setConfirmPasswordView((prev) => !prev)}
                  type="button"
                  className="top-0 bottom-0 rounded-md grid place-items-center text-[1.2rem] absolute px-2 right-0"
                >
                  <Icon
                    className="text-[#636363]"
                    icon={
                      confirmPasswordView
                        ? "iconoir:eye-closed"
                        : "fluent:eye-24-regular"
                    }
                  />
                </button>
              </div>

              {errors.confirmPassword && (
                <p className="text-smallest font-medium text-red-500">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button disabled={loading} className="btn-style button-shadow">
              <p className="text-small text-white font-medium">
                {loading ? "Creating account..." : "Create account"}
              </p>
              {loading && (
                <Icon
                  icon="line-md:loading-alt-loop"
                  className="text-[1.2rem] text-white"
                />
              )}
            </button>
          </form>

          <div className="mb-5">
            <motion.div
              initial="init"
              whileInView="slide"
              viewport={{
                once: true,
              }}
              custom={1.5}
              className="flex items-center gap-3 mb-5"
            >
              <span className="input-shadow h-[0.08em] bg-[#e1e1e1] flex-1"></span>
              <p className="text-smaller text-gray-600">or continue with</p>
              <span className="input-shadow h-[0.08em] bg-[#e1e1e1] flex-1"></span>
            </motion.div>

            <div className="custom-flex gap-4">
              <motion.button
                initial="init"
                whileInView="slide"
                viewport={{
                  once: true,
                }}
                custom={1}
                className="button-shadow2 btn-style2"
              >
                <Icon
                  icon="material-icon-theme:google"
                  className="text-[1rem]"
                />
                <p className="text-smaller font-medium text-black">Google</p>
              </motion.button>
              <motion.button
                initial="init"
                whileInView="slide"
                viewport={{
                  once: true,
                }}
                custom={1}
                className="button-shadow2 btn-style2"
              >
                <Icon icon="akar-icons:github-fill" className="text-[1rem]" />
                <p className="text-smaller font-medium text-black">GitHub</p>
              </motion.button>
            </div>
          </div>

          <div>
            <p className="text-center text-smaller text-gray-600">
              Already have an account?{" "}
              <span>
                <Link
                  href="/login"
                  className="text-primary text-smaller font-medium"
                >
                  Sign in
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>

      <IllustrationContainer
        title="Start your journey today."
        description="Create your free account and discover a new way to connect with friends, family, and colleagues around the world."
      />
    </main>
  );
}
