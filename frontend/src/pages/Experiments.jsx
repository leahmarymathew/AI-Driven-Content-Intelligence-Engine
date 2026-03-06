import { useState } from "react"

function Experiments(){

 const [experiments] = useState([
  {
   id: 1,
   name: "Email Subject Lines",
   status: "Active",
   variantA: { name: "Variant A", metric: 32.5, label: "Open Rate" },
   variantB: { name: "Variant B", metric: 41.8, label: "Open Rate" },
   improvement: 28.6,
   startDate: "Feb 1, 2026",
   endDate: "Mar 15, 2026"
  },
  {
   id: 2,
   name: "CTA Button Color",
   status: "Completed",
   variantA: { name: "Blue Button", metric: 18.2, label: "Click Rate" },
   variantB: { name: "Green Button", metric: 22.7, label: "Click Rate" },
   improvement: 24.7,
   startDate: "Jan 15, 2026",
   endDate: "Feb 28, 2026"
  },
  {
   id: 3,
   name: "Content Length Test",
   status: "Draft",
   variantA: { name: "Short Form", metric: 0, label: "Engagement" },
   variantB: { name: "Long Form", metric: 0, label: "Engagement" },
   improvement: 0,
   startDate: "Mar 10, 2026",
   endDate: "Apr 10, 2026"
  }
 ])

 return(

  <div className="max-w-7xl mx-auto">

   {/* Header */}
   <div className="mb-8 flex items-center justify-between">
    <div>
     <h1 className="text-3xl font-bold text-gray-900 mb-2">A/B Experiments</h1>
     <p className="text-gray-600">Test and optimize your content performance</p>
    </div>
    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition">
     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
     </svg>
     <span>New Experiment</span>
    </button>
   </div>

   {/* Experiments List */}
   <div className="space-y-6">
    
    {experiments.map((experiment) => (
     <div key={experiment.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition">
      
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
       <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{experiment.name}</h3>
        <p className="text-sm text-gray-500">{experiment.startDate} - {experiment.endDate}</p>
       </div>
       <span className={`px-3 py-1 rounded-full text-xs font-medium ${
        experiment.status === 'Active' 
         ? 'bg-green-100 text-green-800' 
         : experiment.status === 'Completed'
         ? 'bg-blue-100 text-blue-800'
         : 'bg-gray-100 text-gray-800'
       }`}>
        {experiment.status}
       </span>
      </div>

      {/* Variants Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
       
       {/* Variant A */}
       <div className="bg-gray-50 rounded-lg p-6 border-2 border-transparent hover:border-blue-200 transition">
        <div className="flex items-center justify-between mb-4">
         <h4 className="font-medium text-gray-700">{experiment.variantA.name}</h4>
         <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-blue-600 text-sm font-bold">A</span>
         </div>
        </div>
        <p className="text-4xl font-bold text-gray-900 mb-2">{experiment.variantA.metric}%</p>
        <p className="text-sm text-gray-600">{experiment.variantA.label}</p>
       </div>

       {/* Variant B */}
       <div className="bg-gray-50 rounded-lg p-6 border-2 border-transparent hover:border-green-200 transition">
        <div className="flex items-center justify-between mb-4">
         <h4 className="font-medium text-gray-700">{experiment.variantB.name}</h4>
         <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
          <span className="text-green-600 text-sm font-bold">B</span>
         </div>
        </div>
        <p className="text-4xl font-bold text-gray-900 mb-2">{experiment.variantB.metric}%</p>
        <p className="text-sm text-gray-600">{experiment.variantB.label}</p>
       </div>

      </div>

      {/* Results */}
      {experiment.status !== 'Draft' && (
       <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-200">
        <div className="flex items-center justify-between">
         <div className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-medium text-gray-900">
           {experiment.variantB.name} performs better
          </span>
         </div>
         <span className="text-lg font-bold text-green-600">+{experiment.improvement}%</span>
        </div>
       </div>
      )}

      {/* Actions */}
      <div className="flex space-x-3 mt-6 pt-6 border-t border-gray-200">
       <button className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium px-4 py-2 rounded-lg transition">
        View Details
       </button>
       <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition">
        Export
       </button>
       {experiment.status === 'Active' && (
        <button className="px-4 py-2 border border-red-300 hover:bg-red-50 text-red-600 font-medium rounded-lg transition">
         Stop Test
        </button>
       )}
      </div>

     </div>
    ))}

   </div>

   {/* Stats Summary */}
   <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
    <h3 className="font-semibold text-gray-900 mb-4">Experiment Stats</h3>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
     
     <div className="text-center p-4 bg-gray-50 rounded-lg">
      <p className="text-2xl font-bold text-gray-900">{experiments.length}</p>
      <p className="text-sm text-gray-600">Total Experiments</p>
     </div>

     <div className="text-center p-4 bg-gray-50 rounded-lg">
      <p className="text-2xl font-bold text-green-600">{experiments.filter(e => e.status === 'Active').length}</p>
      <p className="text-sm text-gray-600">Active Tests</p>
     </div>

     <div className="text-center p-4 bg-gray-50 rounded-lg">
      <p className="text-2xl font-bold text-blue-600">{experiments.filter(e => e.status === 'Completed').length}</p>
      <p className="text-sm text-gray-600">Completed</p>
     </div>

     <div className="text-center p-4 bg-gray-50 rounded-lg">
      <p className="text-2xl font-bold text-gray-900">
       {(experiments.filter(e => e.status === 'Completed').reduce((sum, e) => sum + e.improvement, 0) / experiments.filter(e => e.status === 'Completed').length).toFixed(1)}%
      </p>
      <p className="text-sm text-gray-600">Avg Improvement</p>
     </div>

    </div>
   </div>

  </div>

 )

}

export default Experiments
