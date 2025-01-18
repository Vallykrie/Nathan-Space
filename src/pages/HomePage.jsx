import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="relative h-screen w-full">
      {/* Earth Background */}
      <spline-viewer
        loading-anim-type="spinner-small-light"
        url="https://prod.spline.design/KDcJ9iKS7QaDojfI/scene.splinecode"
        background="transparent"
        style={{
          position: "absolute",
          top: "-12%",
          left: "30%",
          width: "100%",
          height: "120%",
          zIndex: 0,
          overflow: "hidden",
          clipPath: "inset(10% 10% 10% 10%)",
        }}
      ></spline-viewer>

      {/* Content Overlay */}
      <div className="flex flex-col items-center justify-center h-full text-white z-10">
        <h1 className="text-4xl font-bold mb-8">
          Welcome to the Space Dashboard
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          Explore exciting features about NASA&apos;s data.
        </p>
        <Link
          to="/epic"
          className="p-4 bg-blue-500 hover:bg-blue-600 text-white rounded"
        >
          View EPIC Images
        </Link>
      </div>
    </div>
  );
}
