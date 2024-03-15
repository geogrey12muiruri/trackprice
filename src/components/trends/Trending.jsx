import React from 'react';

const Trending = ({ data }) => {
  return (
    <div className="overflow-x-auto">
        <h2 className='font-bold font-mono text-center text-3xl'>Trending Commodities</h2>
      <table className="min-w-full table-auto bg-emerald-400">
        <thead>
          <tr className='text-slate-950 font-bold font-mono'>
            <th className="px-4 py-2 font-mono text-slate-950">Commodity</th>
            <th className="px-4 py-2 font-mono text-slate-950">Market</th>
            <th className="px-4 py-2 font-mono text-slate-950">County</th>
            <th className="px-4 py-2 font-mono text-slate-950">Wholesale (KES/kg)</th>
            <th className="px-4 py-2 font-mono text-slate-950">Retail (KES/kg)</th>
            <th className="px-4 py-2 font-mono text-slate-950">Supply (kg)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="border px-4 py-2 font-mono text-slate-950">{row.Commodity}</td>
              <td className="border px-4 py-2 font-mono text-slate-950">{row.Market}</td>
              <td className="border px-4 py-2 font-mono text-slate-950">{row.County}</td>
              <td className="border px-4 py-2 font-mono text-slate-950">{row['Wholesale(KES/kg)']}</td>
              <td className="border px-4 py-2 font-mono text-slate-950">{row['Retail(KES/kg)']}</td>
              <td className="border px-4 py-2 font-mono text-slate-950">{row['Supply(kg)']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Trending;
