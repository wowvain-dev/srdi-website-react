import {InView} from "react-intersection-observer";

function About() {
  return(
    <div>
      <InView threshold={.6}>
        {({inView, ref, entry}) => {
          if (inView) {
          }
          return (
            <div id="despre_noi" className="bg-[#003f5b] pt-10 w-[100vw] h-[100vh]" ref={ref}>
            </div>
          )
        }
        }
      </InView>
    </div>

  );
}

export default About;