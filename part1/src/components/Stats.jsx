/* eslint-disable react/prop-types */
const StatLine = (props) => {
    return (
      <>
      <tr>
        <th>
        {props.name}
        </th>
      </tr>
      <tr>
        <th>
            {props.value}
        </th>
      </tr>
      </>
    )  
  }
const Stats = ({ bad, good, neutral }) => {
  const total = bad + good + neutral;
  const averageScore = (good * 1 + neutral * 0 + bad * -1) / total;
  const posfeedback = (good / total) * 100;
  if (good == 0 && bad == 0 && neutral == 0) {
    return (
      <>
        <h1>stats</h1>
        <h2>no feedback</h2>
      </>
    );
  } else {
    return (
      <>
        <h1>stats</h1>
        <table>
            <tbody>
            <StatLine name={"good"} value={good} />
        <StatLine name={"bad"} value={bad} />
        <StatLine name={"neutral"} value={neutral} />
        <StatLine name={"all"} value={total} />
        <StatLine name={"average score"} value={averageScore} />
        <StatLine name={"positive feedback"} value={posfeedback} />
            </tbody>
       
        </table>
      </>
    );
  }
};

export default Stats
