import { useState } from "react"

function Automation(){

 const [workflows] = useState([
  {
   id: 1,
   name: "New Blog Post",
   trigger: "Content Created",
   action: "Send to CRM",
   status: "Active",
   audience: "Tag Audience"
  },
  {
   id: 2,
   name: "Generate Content",
   trigger: "Scheduled Daily",
   action: "Auto Generate",
   status: "Active",
   audience: "All Users"
  },
  {
   id: 3,
   name: "Lead Scored High",
   trigger: "Score > 80",
   action: "Notify Sales",
   status: "Inactive",
   audience: "Sales Team"
  }
 ])

 return(

  <div className="max-w-7xl mx-auto">

   {/* Header */}
   <div className="mb-8 flex items-center justify-between">
    <div>
     <h1 className="text-3xl font-bold text-gray-900 mb-2">Automation Workflows</h1>
     <p className="text-gray-600">Manage your automated content workflows and triggers</p>
    </div>
    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition">
     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
     </svg>
     <span>Create Workflow</span>
    </button>
   </div>

   {/* Automation Triggers Section */}
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
    
    {workflows.map((workflow) => (
     <div key={workflow.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition">
      
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
       <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
         <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
         </svg>
        </div>
        <div>
         <h3 className="font-semibold text-gray-900">{workflow.name}</h3>
         <p className="text-sm text-gray-500">{workflow.audience}</p>
        </div>
       </div>
       <span className={`px-3 py-1 rounded-full text-xs font-medium ${
        workflow.status === 'Active' 
         ? 'bg-green-100 text-green-800' 
         : 'bg-gray-100 text-gray-800'
       }`}>
        {workflow.status}
       </span>
      </div>

      {/* Workflow Steps */}
      <div className="space-y-3 mb-4">
       <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
         <span className="text-purple-600 text-xs font-bold">1</span>
        </div>
        <div className="flex-1">
         <p className="text-sm font-medium text-gray-700">Trigger</p>
         <p className="text-xs text-gray-500">{workflow.trigger}</p>
        </div>
       </div>

       <div className="ml-4 border-l-2 border-gray-200 h-4"></div>

       <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
         <span className="text-blue-600 text-xs font-bold">2</span>
        </div>
        <div className="flex-1">
         <p className="text-sm font-medium text-gray-700">Action</p>
         <p className="text-xs text-gray-500">{workflow.action}</p>
        </div>
       </div>
      </div>

      {/* Actions */}
      <div className="flex space-x-2 pt-4 border-t border-gray-100">
       <button className="flex-1 text-center px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md transition">
        Manage
       </button>
       <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md transition">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
       </button>
      </div>

     </div>
    ))}

   </div>

   {/* Stats Section */}
   <div className="bg-white rounded-lg border border-gray-200 p-6">
    <h3 className="font-semibold text-gray-900 mb-4">Automation Stats</h3>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
     
     <div className="text-center p-4 bg-gray-50 rounded-lg">
      <p className="text-2xl font-bold text-gray-900">156</p>
      <p className="text-sm text-gray-600">Total Triggers</p>
     </div>

     <div className="text-center p-4 bg-gray-50 rounded-lg">
      <p className="text-2xl font-bold text-green-600">98%</p>
      <p className="text-sm text-gray-600">Success Rate</p>
     </div>

     <div className="text-center p-4 bg-gray-50 rounded-lg">
      <p className="text-2xl font-bold text-blue-600">3</p>
      <p className="text-sm text-gray-600">Active Workflows</p>
     </div>

     <div className="text-center p-4 bg-gray-50 rounded-lg">
      <p className="text-2xl font-bold text-gray-900">24h</p>
      <p className="text-sm text-gray-600">Avg Response Time</p>
     </div>

    </div>
   </div>

  </div>

 )

}

export default Automation