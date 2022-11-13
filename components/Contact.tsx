import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

type Props = {};

export default function Contact({}: Props) {
  const form = useRef<any>();
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (serviceId && templateId && form.current && publicKey) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result) => {
          console.log(result.text);
          confirm("送信完了しました。");
        },
        (error) => {
          console.log(error.text);
          confirm("送信失敗しました。");
        }
      );
    }
  };

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col space-y-4 w-80 md:w-96 mx-auto"
      >
        <input
          name="user_name"
          placeholder="Name"
          // globals.cssに記述
          className="contactInput"
          type="text"
        />
        <input
          name="user_email"
          placeholder="Email"
          className="contactInput"
          type="email"
        />
        <input
          name="subject"
          placeholder="Subject"
          className="contactInput"
          type="text"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="contactInput"
        />
        <button
          type="submit"
          className="bg-[#F7AB0A] py-3 px-10 rounded-md text-black font-bold text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
