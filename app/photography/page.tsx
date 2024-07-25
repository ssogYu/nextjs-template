const getData = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  return { data: 'hello word' };
};

const Home = async () => {
  const { data } = await getData();
  return <div>{data}</div>;
};

export default Home;
