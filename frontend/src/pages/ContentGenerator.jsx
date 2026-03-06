import { useState } from "react"
import API from "../services/api"

function ContentGenerator(){

 const [topic, setTopic] = useState("")
 const [audience, setAudience] = useState("")
 const [tone, setTone] = useState("")
 const [result, setResult] = useState(null)
 const [loading, setLoading] = useState(false)

 const generateContent = async () => {

  if (!topic || !audience || !tone) {
    alert("Please fill in all fields")
    return
  }

  try {
    setLoading(true)
    const res = await API.post("/generate-content", {
      topic,
      audience,
      tone
    })
    setResult(res.data)
  } catch (error) {
    console.error("Error generating content:", error)
    alert("Failed to generate content")
  } finally {
    setLoading(false)
  }
 }

 return(

  <div className="p-8 max-w-4xl mx-auto">

   <h1 className="text-3xl font-bold mb-8">AI Content Generator</h1>

   <div className="space-y-4 bg-gray-50 p-6 rounded-lg mb-8">

    <div>
     <label className="block text-sm font-medium mb-2">Topic</label>
     <input
      type="text"
      placeholder="e.g., Machine Learning in Healthcare"
      value={topic}
      onChange={(e) => setTopic(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
     />
    </div>

    <div>
     <label className="block text-sm font-medium mb-2">Target Audience</label>
     <input
      type="text"
      placeholder="e.g., Healthcare Professionals"
      value={audience}
      onChange={(e) => setAudience(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
     />
    </div>

    <div>
     <label className="block text-sm font-medium mb-2">Tone</label>
     <input
      type="text"
      placeholder="e.g., Professional, Casual, Academic"
      value={tone}
      onChange={(e) => setTone(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
     />
    </div>

    <button
     onClick={generateContent}
     disabled={loading}
     className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition"
    >
     {loading ? "Generating..." : "Generate Content"}
    </button>

   </div>

   {result && (
    <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">

     <div className="mb-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{result.title}</h2>
      <p className="text-gray-600 text-lg">{result.summary}</p>
     </div>

     <div className="bg-gray-50 p-6 rounded-lg mb-6">
      <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{result.content}</p>
     </div>

     <div className="border-t pt-4">
      <h3 className="font-semibold text-gray-900 mb-3">Metadata</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
       <div className="text-sm">
        <span className="text-gray-500">Topic:</span>
        <p className="font-medium text-gray-900">{result.metadata.topic}</p>
       </div>
       <div className="text-sm">
        <span className="text-gray-500">Audience:</span>
        <p className="font-medium text-gray-900">{result.metadata.audience}</p>
       </div>
       <div className="text-sm">
        <span className="text-gray-500">Tone:</span>
        <p className="font-medium text-gray-900">{result.metadata.tone}</p>
       </div>
      </div>
     </div>

    </div>
   )}

  </div>

 )

}

export default ContentGenerator