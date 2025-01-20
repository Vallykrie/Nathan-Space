import { Link } from "react-router-dom";
import NavBar from "../component/navbar";
import titleLine from "../assets/titleLine.svg";

export default function HomePage() {
  return (
    <div className="relative h-screen w-full overflow-hidden px-4">
      <NavBar />
      {/* Earth */}
      <div className="w-1/2 max-[1000px]:hidden block">
        <spline-viewer
          loading-anim-type="spinner-small-light"
          url="https://prod.spline.design/H4aw8VeY0ATSL3MC/scene.splinecode"
          style={{
            position: "absolute",
            top: "-5%",
            left: "30%",
            width: "100%",
            height: "120%",
            zIndex: 0,
            overflow: "hidden",
          }}
        ></spline-viewer>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center h-full w-1/2 justify-center text-white ml-4 -mt-28  max-[1080px]:w-full">
        <h1 className="font-jockey text-2xl tracking-[1rem] mb-8">PLANET</h1>
        <img src={titleLine} alt="title line" className="mb-8" />
        <h1 className="font-krona text-[5.5rem] tracking-[2.25rem] mb-6 drop-shadow-[0_0px_30px_rgba(255,255,255,0.8)]">
          EARTH
        </h1>

        <p className="text-lg text-white/60 text-center mb-8 w-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          quidem perspiciatis reprehenderit in doloribus mollitia ullam
          voluptate eum tempora nostrum soluta, iure exercitationem voluptates.
          Debitis qui eum excepturi exercitationem quia!
        </p>
        <Link
          to="/epic"
          className="py-3 px-16 bg-white hover:bg-black hover:text-white text-black hover:border rounded-full font-jockey text-lg"
        >
          EXPLORE
        </Link>
      </div>
    </div>
  );
}
