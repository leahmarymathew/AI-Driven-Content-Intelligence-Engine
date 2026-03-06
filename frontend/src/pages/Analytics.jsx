import { useEffect, useState } from "react"
import API from "../services/api"
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts"

function Analytics(){

 const [data, setData] = useState(null)
 const [loading, setLoading] = useState(true)

 useEffect(() => {

  setLoading(true)
  API.get("/analytics")
   .then(res => {

    setData([
     {name: "Engagement", value: res.data.average_engagement || 0},
     {name: "Consistency", value: res.data.response_consistency || 0}
    ])
    setLoading(false)

   })
   .catch(err => {
    console.error("Analytics error:", err)
    setLoading(false)
   })

 }, [])

 return(

  <div className="max-w-7xl mx-auto">

   {/* Header */}
   <div className="mb-8">
    <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
    <p className="text-gray-600">Monitor your content performance metrics</p>
   </div>

   {/* Loading State */}
   {loading && (
    <div className="flex justify-center items-center py-12">
     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
   )}

   {/* Analytics Chart */}
   {!loading && data && (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
     
     <h3 className="text-lg font-semibold text-gray-900 mb-6">Performance Metrics</h3>

     <div className="h-96">
      <ResponsiveContainer width="100%" height="100%">
       <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="name" tick={{ fontSize: 14 }} />
        <YAxis tick={{ fontSize: 14 }} domain={[0, 1]} />
        <Tooltip 
         contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
         formatter={(value) => `${(value * 100).toFixed(1)}%`}
        />
        <Legend />
        <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
       </BarChart>
      </ResponsiveContainer>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
       <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-blue-900">Average Engagement</h4>
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
       </div>
       <p className="text-3xl font-bold text-blue-900">{((data[0]?.value || 0) * 100).toFixed(1)}%</p>
       <p className="text-sm text-blue-700 mt-2">Tracking user interactions</p>
      </div>

      <div className="bg-green-50 rounded-lg p-6 border border-green-200">
       <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-green-900">Response Consistency</h4>
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
       </div>
       <p className="text-3xl font-bold text-green-900">{((data[1]?.value || 0) * 100).toFixed(1)}%</p>
       <p className="text-sm text-green-700 mt-2">Quality and reliability score</p>
      </div>

     </div>

    </div>
   )}

   {/* Empty State */}
   {!loading && !data && (
    <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
     <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
     </svg>
     <h3 className="mt-4 text-lg font-medium text-gray-900">No analytics data</h3>
     <p className="mt-2 text-gray-500">Generate some sample data to view analytics</p>
    </div>
   )}

  </div>

 )

}

export default Analytics