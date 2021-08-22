import TransitionComponent from "../../transitionComponent/TransitionComponent";

export default function ErrorSection({ error }: { error: string }) {
  return (
    <TransitionComponent>
      <div className="w-full h-screen absolute" />
      <div className="w-full h-screen flex flex-col justify-center items-center absolute">
        <div className="w-3/4 flex flex-col items-left">
          <span className="font-poppins font-bold text-6xl text-custom-first">
            Oh no!
            <br />
            Something went wrong...
          </span>
          <span className="font-poppins text-xl text-custom-first mt-2">
            Error message: {error}
          </span>
        </div>
      </div>
    </TransitionComponent>
  );
}
