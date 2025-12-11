const Props = (props) => {
  return (
    <div>
      <h1>This is a prop component</h1>
      <ol>
        <li>Props are:</li>
        <ul>
          <li>{props.hi}</li>
          <li>I completed my {props.school}</li>
        </ul>
      </ol>
    </div>
  );
};

export default Props;