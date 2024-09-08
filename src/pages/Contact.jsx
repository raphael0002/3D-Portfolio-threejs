import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");
    console.log({
      from_name: form.name,
      to_name: "Rohan",
      from_email: form.email,
      to_email: "rohan96shrestha@gmail.com",
      message: form.message,
    });

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Rohan",
          from_email: form.email,
          to_email: "rohan96shrestha@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Message sent successfully!",
          type: "success",
        });
        //TODO: hide an alert
        setTimeout(() => {
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        console.error(error.message);
        showAlert({
          show: true,
          text: "I didn't recieve your message!",
          type: "danger",
        });
        //TODO: Show error message
      });
  };
  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in touch</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label htmlFor="nameId" className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              id="nameId"
              placeholder="Your name here...."
              value={form.name}
              required
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="input"
            />
          </label>
          <label htmlFor="emailId" className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              id="emailId"
              placeholder="Your email here...."
              value={form.email}
              required
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="input"
            />
          </label>
          <label htmlFor="messageId" className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              id="messageId"
              rows={4}
              placeholder="Let me know how can I help you!"
              value={form.message}
              required
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="input"
            />
          </label>
          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? "Sending...." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            aspect: window.innerWidth / window.innerHeight,
            near: 0.1,
            far: 1000,
          }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={0.5} />
            <Fox
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.8, 0]}
              scale={[1, 0.5, 0.5]}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
