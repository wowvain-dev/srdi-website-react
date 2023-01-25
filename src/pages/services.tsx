import {InView} from "react-intersection-observer";

function Services() {
  return(
  <div >
    <InView threshold={.6}>
      {({inView, ref, entry}) => {
        if (inView) {
        }
        return(
          <div id="servicii" className=" w-[100vw] h-[100vh]" ref={ref}>
          </div>
        )
      }
      }
    </InView>
  </div>
  )
}

export default Services;