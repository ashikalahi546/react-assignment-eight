
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
const Pages = () => {
  
const colors = ['#0085F6', '00C29C', '#FBB929', '#FC8042', '#FB0100'];

const data = [
  {
    name: 'The Great Gatsby',
    uv: 192,
 
  },
  {
    name: 'To kill a mocking bird',
    uv: 281,
  
  },
  {
    name: '1984',
    uv: 328,
  
  },

  {
    name: 'The Alchemist',
    uv: 177,
  
  },
  {
    name: 'Pride and prejudice',
    uv: 279,
  
  },
  


];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

  return (
 
  
    <div className='flex  justify-center mt-5'>
        <div className='bg-gray-100 w-[1280px] p-10 rounded-xl'>
      <BarChart
      width={1200}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
      </div>
    </div>

  );
};

export default Pages;
