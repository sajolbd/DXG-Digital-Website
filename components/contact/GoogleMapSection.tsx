import Container from "components/shared/Container";

export default function GoogleMapSection() {
  return (
    <section className="bg-[#0C0E10] py-8 lg:py-16">
      <Container>
        <div className="overflow-hidden rounded-[28px] border border-white/10">
          <div className="relative h-[300px] sm:h-[400px] lg:h-[520px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16705.736339288447!2d-82.64607201502389!3d28.059368807770284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2eb7e2ebad447%3A0xfeab7eb13bbc13f!2s12824%20Dupont%20Cir%2C%20Tampa%2C%20FL%2033626%2C%20USA!5e1!3m2!1sen!2sbd!4v1778662108370!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
