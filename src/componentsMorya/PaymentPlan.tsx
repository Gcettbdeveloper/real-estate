

import React from 'react';
import EnquireBtn from '@/components/EnquireBtn';

const PaymentPlan = () => {
    const plans = [
        {
          unitType: '3 BHK + 2T',
          size: '1,531 sq ft',
          price: '₹ 1.46 Cr Onwards',
        },
        {
          unitType: '3.5 BHK + 3T',
          size: '1,941 sq ft',
          price: '₹ 1.80 Cr Onwards',
        },
        {
          unitType: '4 BHK (Compact)',
          size: '2,240 sq ft',
          price: '₹ 2.06 Cr Onwards',
        },
        {
          unitType: '4 BHK (Luxury)',
          size: '2,647 sq ft',
          price: '₹ 2.48 Cr Onwards',
        },
      ];
      

  return (
    <section className="px-4 py-12 sm:px-8 md:px-16 lg:px-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-blue-400 text-2xl sm:text-4xl md:text-5xl font-bold mb-10 mt-5">
          Morya - Payment Plans
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 border-b">
                  Unit Type
                </th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 border-b">
                  Size (Sq. Ft.)
                </th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 border-b">
                  Price Range (₹)
                </th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3 text-gray-700 border-b">
                    {plan.unitType}
                  </td>
                  <td className="px-4 py-3 text-gray-700 border-b">
                    {plan.size}
                  </td>
                  <td className="px-4 py-3 text-gray-700 border-b">
                    {plan.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='mt-5'>
        <EnquireBtn source="emami" btntext="Instant Call Back ⚡" />


        </div>
      </div>
    </section>
  );
};

export default PaymentPlan;
