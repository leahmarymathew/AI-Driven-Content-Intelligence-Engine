import { useEffect, useState } from "react"
import API from "../services/api"
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts"

function Dashboard(){

 const [stats, setStats] = useState({
  contentGenerated: 135,
  engagementRate: 58,
  topCategory: "Cybersecurity",
  responseConsistency: 88
 })

 const [recentContent, setRecentContent] = useState([])
 const [analyticsData, setAnalyticsData] = useState(null)

 useEffect(() => {
  // Load recent content
  API.get("/content-library")
   .then(res => setRecentContent(res.data.slice(0, 3)))
   .catch(err => console.error(err))

  // Load analytics
  API.get("/analytics")
   .then(res => setAnalyticsData(res.data))
   .catch(err => console.error(err))
 }, [])

 const chartData = [
  { week: "Week 1", engagement: 65, consistency: 72 },
  { week: "Week 2", engagement: 78, consistency: 75 },
  { week: "Week 3", engagement: 72, consistency: 80 },
  { week: "Week 4", engagement: 85, consistency: 82 },
  { week: "Week 5", engagement: 80, consistency: 88 }
 ]

 return(

  <div className="max-w-7xl mx-auto">

   {/* Header */}
   <div className="mb-8">
    <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome, Alex,</h1>
    <p className="text-gray-600">Here's your content overview.</p>
   </div>

   {/* Stats Cards */}
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    
    <div className="bg-white rounded-lg border border-gray-200 p-6">
     <div className="flex items-center justify-between mb-2">
      <h3 className="text-sm font-medium text-gray-600">Content Generated</h3>
     </div>
     <p className="text-3xl font-bold text-gray-900">{stats.contentGenerated}</p>
     <p className="text-sm text-gray-500 mt-1">this month</p>
    </div>

    <div className="bg-white rounded-lg border border-gray-200 p-6">
     <div className="flex items-center justify-between mb-2">
      <h3 className="text-sm font-medium text-gray-600">Engagement Rate</h3>
     </div>
     <p className="text-3xl font-bold text-gray-900">{stats.engagementRate}%</p>
     <p className="text-sm text-green-600 mt-1">↑ 3.2%</p>
    </div>

    <div className="bg-white rounded-lg border border-gray-200 p-6">
     <div className="flex items-center justify-between mb-2">
      <h3 className="text-sm font-medium text-gray-600">Top Category</h3>
     </div>
     <p className="text-2xl font-bold text-gray-900">{stats.topCategory}</p>
    </div>

    <div className="bg-white rounded-lg border border-gray-200 p-6">
     <div className="flex items-center justify-between mb-2">
      <h3 className="text-sm font-medium text-gray-600">Response Consistency</h3>
     </div>
     <p className="text-3xl font-bold text-gray-900">{stats.responseConsistency}%</p>
     <p className="text-sm text-green-600 mt-1">↑ 2.5%</p>
    </div>

   </div>

   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

    {/* Recent Content */}
    <div className="bg-white rounded-lg border border-gray-200 p-6">
     <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-semibold text-gray-900">Recent Content</h3>
      <a href="/library" className="text-sm text-blue-600 hover:text-blue-800">View All</a>
     </div>

     <div className="space-y-4">
      {recentContent.length > 0 ? recentContent.map((item) => (
       <div key={item.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
         <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
         </svg>
        </div>
        <div className="flex-1 min-w-0">
         <p className="font-medium text-gray-900 truncate">{item.title}</p>
         <p className="text-sm text-gray-500">Category: {item.category || 'General'}</p>
        </div>
       </div>
      )) : (
       <div className="text-center py-8 text-gray-500">
        <p>No content yet. Start generating!</p>
       </div>
      )}
     </div>
    </div>

    {/* Performance Metrics */}
    <div className="bg-white rounded-lg border border-gray-200 p-6">
     <h3 className="text-lg font-semibold text-gray-900 mb-6">Performance Metrics</h3>
     
     <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
       <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="week" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip />
        <Line type="monotone" dataKey="engagement" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
        <Line type="monotone" dataKey="consistency" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
       </LineChart>
      </ResponsiveContainer>
     </div>

     <div className="flex items-center justify-center space-x-6 mt-4">
      <div className="flex items-center space-x-2">
       <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
       <span className="text-sm text-gray-600">Engagement</span>
      </div>
      <div className="flex items-center space-x-2">
       <div className="w-3 h-3 bg-green-500 rounded-full"></div>
       <span className="text-sm text-gray-600">Consistency</span>
      </div>
     </div>
    </div>

   </div>

   {/* A/B Experiment Results */}
   <div className="mt-6 bg-white rounded-lg border border-gray-200 p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">A/B Experiment Results</h3>
    
    <div className="bg-gray-50 rounded-lg p-4">
     <div className="flex items-center justify-between mb-3">
      <p className="font-medium text-gray-700">Test: Email Subject Lines</p>
      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Active</span>
     </div>
     
     <div className="grid grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg border border-gray-200">
       <p className="text-sm text-gray-600 mb-1">Variant A</p>
       <p className="text-2xl font-bold text-gray-900">32.5%</p>
       <p className="text-xs text-gray-500">Open Rate</p>
      </div>
      <div className="bg-white p-4 rounded-lg border border-gray-200">
       <p className="text-sm text-gray-600 mb-1">Variant B</p>
       <p className="text-2xl font-bold text-green-600">41.8%</p>
       <p className="text-xs text-gray-500">Open Rate</p>
      </div>
     </div>
     
     <div className="mt-3 text-center">
      <p className="text-sm text-green-600 font-medium">Improvement: +28.6%</p>
     </div>
    </div>
   </div>

  </div>

 )

}

export default Dashboard
