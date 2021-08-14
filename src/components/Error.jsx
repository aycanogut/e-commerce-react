import Title from "./Title";

const Error = () => {
  return (
    <div class="text-wrapper">
      <div class="title" data-content="404">
        404
      </div>
      <div class="subtitle">
        Oops, the page you're looking for doesn't exist.
      </div>
      <div class="buttons">
        <a class="button" href="/">Go to homepage</a>
      </div>
    </div>
  );
};

export default Error;