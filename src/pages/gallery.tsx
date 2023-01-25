import {InView} from "react-intersection-observer";

function Gallery() {
  return(
  <div>
    <InView threshold={.6}>
      {({inView, ref, entry}) => {
        if (inView) {
        }
        return(
          <div ref={ref} id="galerie" className={`${inView ? 'section-active' : ''} w-[100vw] h-[100vh]`}>
            <p className={`text-5xl ml-auto mr-auto section-paragraph`}
            >GALERIE</p>
          </div>
        )}}
    </InView>
  </div>
  );
}

export default Gallery;