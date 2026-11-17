import { contact } from "@/content/site";
import RevealCopy from "./RevealCopy";
import SlideButton from "./SlideButton";
import { closingCopy } from "./typography";

export default function Contact() {
  return (
    <section
      id="contato"
      className="bg-paper px-6 pt-12 pb-12 md:px-12 md:py-24 xl:py-32"
    >
      <RevealCopy text={contact.headline} className={closingCopy} />
      <div className="mt-10 flex md:mt-16">
        <SlideButton
          label={contact.cta.label}
          href={contact.cta.href}
          variant="brand"
        />
      </div>
    </section>
  );
}
