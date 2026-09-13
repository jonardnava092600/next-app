import Page from "./[page]/page";

export default function Home() {
  return (
    <>
      <Page params={Promise.resolve({ page: "home" })} />
    </>
    
  );
}
