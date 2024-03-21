import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setIsLoading(false); // Reset loading state
      });

    e.target.reset();
  }
  return (
    <section className="border border-black/10 m-[30px] px-[40px] pt-[40px] pb-[20px] rounded-3xl">
      <container className="m-auto max-w-[1200px]">
        <h2 className="mb-[15px] font-light text-[22px] md:text-[28px]">
          Get in touch
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-[30px]"
          noValidate=""
        >
          <div className="grid grid-cols-2 gap-[16px]">
            <div>
              <label className="block">
                <span className="mb-1 text-[13px] tracking-[6px] ml-1">
                  NAME
                </span>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="enter your name"
                  className="border border-black/10 block p-2 mt-3 text-[13px] w-full rounded-md"
                />
              </label>
            </div>

            <div>
              <label className="block">
                <span className="mb-1 text-[13px] tracking-[6px] ml-1">
                  EMAIL
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="enter your name"
                  className="border border-black/10 block p-2 mt-3 mb-3 text-[13px] w-full rounded-md"
                />
              </label>
            </div>
          </div>

          <label className="block">
            <span className="mb-[5px] text-[13px] tracking-[6px] ml-1">
              MESSAGE
            </span>
            <textarea
              required
              name="message"
              rows="3"
              className="border border-black/10 w-full p-2 mt-3 rounded-md"
            />
          </label>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full md:w-auto mt-3 px-4 py-3 text-sm md:text-[16px]
          rounded-xl border border-transparent bg-black text-white 
          hover:border hover:border-black hover:bg-white hover:text-black
          flex ml-auto justify-center"
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      </container>
    </section>
  );
};
export default ContactForm;
