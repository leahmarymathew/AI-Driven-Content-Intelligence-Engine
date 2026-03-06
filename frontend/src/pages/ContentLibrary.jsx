import { useEffect, useState } from "react"
import API from "../services/api"

function ContentLibrary(){

 const [data, setData] = useState([])
 const [loading, setLoading] = useState(true)
 const [searchTerm, setSearchTerm] = useState("")

 useEffect(() => {
  setLoading(true)
  API.get("/content-library")
   .then(res => {
    setData(res.data)
    setLoading(false)
   })
   .catch(err => {
    console.error("Error loading content:", err)
    setLoading(false)
   })
 }, [])

 const filteredData = data.filter(item => 
  item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  item.category?.toLowerCase().includes(searchTerm.toLowerCase())
 )

 return(

  <div className="max-w-7xl mx-auto">

   {/* Header */}
   <div className="mb-8">
    <h1 className="text-3xl font-bold text-gray-900 mb-2">Content Library</h1>
    <p className="text-gray-600">Browse and manage your generated content</p>
   </div>

   {/* Search Bar */}
   <div className="mb-6">
    <div className="relative">
     <input
      type="text"
      placeholder="Search content by title or category..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
     />
     <svg className="w-5 h-5 text-gray-400 absolute left-4 top-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
     </svg>
    </div>
   </div>

   {/* Loading State */}
   {loading && (
    <div className="flex justify-center items-center py-12">
     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
   )}

   {/* Empty State */}
   {!loading && filteredData.length === 0 && (
    <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
     <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
     </svg>
     <h3 className="mt-4 text-lg font-medium text-gray-900">No content found</h3>
     <p className="mt-2 text-gray-500">Start by generating some content!</p>
    </div>
   )}

   {/* Content Grid */}
   {!loading && filteredData.length > 0 && (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     
     {filteredData.map((item) => (
      <div 
       key={item.id} 
       className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer"
      >
       
       {/* Category Badge */}
       <div className="mb-3">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
         {item.category || 'Uncategorized'}
        </span>
       </div>

       {/* Title */}
       <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
        {item.title}
       </h3>

       {/* Summary */}
       <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {item.summary}
       </p>

       {/* Metadata */}
       <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center space-x-4">
         {item.topic && (
          <span className="flex items-center">
           <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
           </svg>
           {item.topic}
          </span>
         )}
        </div>
        <button className="text-blue-600 hover:text-blue-800 font-medium">
         View →
        </button>
       </div>

      </div>
     ))}

    </div>
   )}

  </div>

 )

}

export default ContentLibrary