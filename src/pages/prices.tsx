import {InView} from "react-intersection-observer";

function Prices() {
  return(
  <div>
    <InView threshold={.6}>
      {({inView, ref, entry}) => {
        if (inView) {
        }
        return(
          <div ref={ref} id="tarife" className="bg-[#efefef] w-[100vw] h-[100vh]">
          </div>
        );
      }
      }
    </InView>
  </div>
  )
}

export default Prices;