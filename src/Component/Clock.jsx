function Clock() {
  return (
    <div>
      <div> it's clock </div>
      <h1>{new Date().toLocaleDateString()}</h1>
      <h2>check first commit</h2>
      <h2>check second commit</h2>
      <h1>{new Date().toLocaleTimeString()}</h1>
    </div>
  );
}

export default Clock;

// vanilla JS 에서는 new Date.get(Hours/Minutes/Seconds)함수로 하나하나 반환했다면,
// react에서는 new Date().toLacal(Date/Time)String으로 바로 반환할 수 있다.
