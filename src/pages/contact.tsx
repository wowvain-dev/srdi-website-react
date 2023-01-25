import {InView} from "react-intersection-observer";

function Contact() {
  return (
  <div>
    <InView threshold={.6}>
      {({inView, ref, entry}) => {
        if (inView) {
        }
        return (
          <div id="contact" className="bg-[#efefef] w-[100vw] h-[100vh]" ref={ref}>
          </div>
        );
      }}
    </InView>
  </div>
  );
}

export default Contact;
