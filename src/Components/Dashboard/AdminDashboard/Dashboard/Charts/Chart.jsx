import React from 'react';



const data = [
  {
    name: 'Page A',
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: 'Page B',
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: 'Page C',
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: 'Page D',
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: 'Page E',
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 400 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 300 },
  { name: 'B2', value: 200 },
];


const Chart = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-5 w-full mx-auto">
      <div className='hidden lg:block w-full md:w-3/6 mx-auto ' style={{ width: 400, height: 300 }}>

      </div>
    </div>
  );
};

export default Chart;