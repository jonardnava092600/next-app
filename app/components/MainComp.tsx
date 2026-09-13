import React from 'react'
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import ProductsPage from './pages/ProductsPage';

type MainPageProp = {
  page:string;
}

const MainComp = async ({page}:MainPageProp) => {
  return (
    <main className="[grid-area:main] min-h-0 overflow-y-auto bg-base-300"><div>
      {(() => {
        switch (page) {
          case "home":
            return <HomePage />;
          case "users":
            return <UsersPage />;
          case "products":
            return <ProductsPage />;
          default:
            return <HomePage />;
        }
      })()}
      </div></main>
  )
}

export default MainComp