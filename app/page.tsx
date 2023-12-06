import Banner from "./components/Banner";
import Header from "./components/Header";

export const revalidate = 0
export default function Home() {
  return (
    <div className="bg-[#3d3d3d]">
      <div className="max-w-[1440px] m-auto ">
        <Header />
        <Banner />

      </div>
    </div>


  )
}