import React from "react";
import { useLoaderData } from "react-router";
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const PageToRead = () => {
  const booksData = useLoaderData();
  const { totalPages } = booksData;
  console.log(totalPages);

  const data = [
    { name: "Page A", value: 400 },
    { name: "Page B", value: 500 },
    { name: "Page C", value: 250 },
    { name: "Page D", value: 750 },
    { name: "Page E", value: 50 },
    { name: "Page F", value: 300 },
  ];

  const getPath = (x, y, width, height) => (
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
);

const TriangleBar = (props) => {
  const {
    fill, x, y, width, height,
  } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
  //     "linear"	প্রতিটি পয়েন্টের মধ্যে সরল (straight) লাইন
  // "monotone"	মসৃণ (smooth) কার্ভড লাইন, ডেটা পয়েন্টগুলোর মাঝে সুন্দর ট্রানজিশন
  // "step"	এক ধাপে এক পয়েন্ট থেকে আরেক পয়েন্টে যায় (stairs-এর মতো)
  // "basis"	আরো smooth, bezier curve ভিত্তিক লাইন
  // "natural"	প্রাকৃতিক curve, কিন্তু overshoot করতে পারে
  return (
    <>
      {/* <LineChart
        width={600}
        height={400}
        data={data}
        margin={{ top: 5, right: 2, bottom: 25, left: 0 }}
        className="border"
      >
        <CartesianGrid stroke="#aaa" strokeDasharray="3 3" />
        <Line type={"monotone"} stroke="red" dataKey="value" strokeWidth={5} name="Book Page Numbers" />
        <XAxis dataKey={"name"}></XAxis>
        <YAxis width="20" label={{value:'value', position: 'insideLeft', angle: '-90'  }}></YAxis>
        <Legend></Legend>
        <Tooltip></Tooltip>
      </LineChart> */}

      <BarChart width={1000} height={800} data={data}>
        <CartesianGrid stroke="#aaa" strokeDasharray="3 3"></CartesianGrid>
        <XAxis dataKey="name" ></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Bar dataKey={'value'} stroke="red" fill="green" shape={<TriangleBar/>} ></Bar>
      </BarChart>
    </>
  );
};

export default PageToRead;
