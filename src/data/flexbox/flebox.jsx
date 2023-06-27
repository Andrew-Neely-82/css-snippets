export const flexBox = () => {
  const data = [
    {
      title: "Display Flex",
      example: "display: flex;",
    },
  ];

  return (
    <>
      {data[0].map((info) => {
        <div className="flexbox__container">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>;
      })}
    </>
  );
};
