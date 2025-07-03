import React from 'react';

const NewsHeadlines = () => {
  const headlines = [
    {
      title: "What India is hoping for on US deal: Up to 20% tariff differential vis-a-vis China rate",
      category: "Trade"
    },
    {
      title: "Centre gives states legal footing to allow bike taxis on Uber, Rapido: What this means",
      category: "Transport"
    },
    {
      title: "HDB Financial Services' lists at 13% premium over IPO price",
      category: "Finance"
    },
    {
      title: "Strawberry & pomegranate up, cereals down: Agriculture output report",
      category: "Agriculture"
    },
    {
      title: "Opportunity for India to become a major sustainable aviation fuel hub, says IATA's Preeti Jain",
      category: "Energy"
    },
    {
      title: "Cabinet approves Employment-Linked Incentive scheme to support formal job generation",
      category: "Policy"
    },
    {
      title: "India's IPO market eyes $2.4 billion in offerings in July as confidence rebounds",
      category: "Finance"
    },
    {
      title: "Cabinet approves four-laning of key section on NH-87 linking Rameswaram",
      category: "Infrastructure"
    },
    {
      title: "India Energy Stack: How this digital integration plan hopes to replicate UPI's success in India's power sector",
      category: "Technology"
    }
  ];

  return (
    <div className="my-3 mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Headlines</h2>
      
      <div className="space-y-4">
        {headlines.map((headline, index) => (
          <div 
            key={index} 
            className="p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200 border-b last:border-b-0"
          >
            <div className="flex items-start">
              <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-blue-100 text-blue-800 mr-3 mt-1">
                {headline.category}
              </span>
              <p className="text-gray-700 flex-1 hover:text-blue-600 cursor-pointer">
                {headline.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsHeadlines;