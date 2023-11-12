function Message() {
  const name = ' a';
  if (name) {
    return <h1>Hello{name} World</h1>;
  } else {
    return <h1>Hello World</h1>;
  }
}
export default Message;
