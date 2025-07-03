import React from 'react'

const CommodityCard = ({ icon, name, value, unit, color }: {
    icon: React.ReactNode;
    name: string;
    value: number;
    unit: string;
    color: string;
}) => (
    <div className={`bg-white p-3 rounded-lg shadow-lg`}>
        <div className="flex items-center">
            <span className={`bg-${color}-500 p-2 rounded-full mr-3`}>
                {icon}
            </span>
            <div>
                <h3 className="font-medium text-gray-600">{name}</h3>
                <p className={`text-xl font-bold text-${color}-600`}>
                    ₹{value.toFixed(2)}{unit}
                </p>
            </div>
        </div>
    </div>
);
export default CommodityCard