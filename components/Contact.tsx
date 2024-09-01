import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<any>();
  const { toast } = useToast();

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const sendEmail = async (e: any) => {
    e.preventDefault();

    if (serviceId && templateId && form.current && publicKey) {
      try {
        setIsSubmitting(true);
        await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
        toast({
          title: "送信完了しました。",
        });
      } catch (error) {
        toast({
          title: "送信に失敗しました。",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <form ref={form} className="flex flex-col space-y-4 w-80 md:w-96 mx-auto">
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
          type="button"
          onClick={sendEmail}
          className="bg-[#F7AB0A] py-3 px-10 rounded-md text-[#363636] font-bold text-lg"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
