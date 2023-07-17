import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link'
import Newsletter from "./_child/newsletter";

export default function footer() {

  const bg = {
    backgroundImage : "url('/images/footer.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "bottom left"
  }

  return (
    <footer className="bg-gray-50" style={bg}>
      <Newsletter></Newsletter>
      <div className="container mx-auto flex justify-center py-12">
          <div className="py-5">
              <div className="flex gap-6 justify-center">
                    <Link href={"/"} color="#888888"><ImFacebook /></Link>
                    <Link href={"/"} color="#888888"><ImTwitter /></Link>                    
                    <Link href={"/"} color="#888888"><ImYoutube /></Link>
              </div>

              <p className="py-5 text-gray-400">Copyright ©2023 All rights reserved | Landing Page made by Ibrahim Abdullah</p>
              <p className="text-gray-400 text-center">All rights reserved</p>
          </div>
      </div>

    </footer>
  )
}