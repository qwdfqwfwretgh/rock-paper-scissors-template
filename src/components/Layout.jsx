import ButtonTheme from "./ButtonTheme/ButtonTheme.jsx";

export default function Layout({ children }) {
  return (
    <>
      <ButtonTheme />
      {children}
    </>
  );
}
