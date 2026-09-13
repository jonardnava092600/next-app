'use client'

import Link from 'next/link'

interface AsideProps {
  selectedPage:string;
}

const Aside = ({selectedPage}:AsideProps) => {
  const pages = ["home", "users", "products"]
  return (
    <>
        <aside className="[grid-area:aside] bg-base-200 text-base-content">
        <ul className="menu w-auto h-auto">
            {
              pages.map((p, i) => 
              <li key={i} className={selectedPage===p? "bg-base-300":""}>
                <Link href={'/'+p}>
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </Link>
              </li>)
            }
            
        </ul>
        </aside>
    </>
  )
}

export default Aside