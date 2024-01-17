import Banner from "@/Components/Banner/Banner";
import Testimonials from "@/Components/Testimonials/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2 className="text-7xl">This is the main home page</h2>
      <Banner />
      <Testimonials />

      <div className='text-7xl'>
        This is the main home page
      </div>
    </div>
  );
}
