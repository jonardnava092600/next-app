import MainComp from "../components/MainComp";
import Aside from "../components/Aside";
import Header from "../components/Header";

import React from 'react'


type PageProps = {
    params:Promise<{
        page:string;
    }>;
}

const Page = async ({params}:PageProps) => {
    

    const {page} = await params;
  return (
      <>
      <Header />
      <Aside selectedPage={page}/>
      <MainComp page={page??"/home"} />
      <footer className="[grid-area:footer] footer footer-center p-4 bg-base-100">
        <aside>
            <p className="text-base-content">Copyright © 2026 - All right reserved by nad</p>
        </aside>
      </footer>
    </>
  )
}

export default Page