import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";

export const Logo = () => {
  return (
    <>
      <div className="flex gap-x-2 mb-2 justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </>
  );
};
