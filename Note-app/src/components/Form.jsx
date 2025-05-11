import React from 'react'

const Form = () => {
  return (
    <div className='bg-white rounded-lg shadow-sm p-6 mb-8'>
        <h2 className='text-lg font-medium text-gray-800 mb-4'>
            Create a new note
        </h2>
        <div class="space-y-4">
            <div>
                <label for="title" class="block text-sm font-medium text-gray-700">
                    Title</label>
                <input 
                type="text" 
                id="title" 
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" 
                placeholder="Note title" 
                value=""></input>
            </div>
            <div>
            <label for="content" class="block text-sm font-medium text-gray-700">
                Content</label>
                <textarea 
                id="content" 
                rows="4" 
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" 
                placeholder="Write your note here..."></textarea>
            </div>
            <div class="flex justify-end">
                <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-plus h-4 w-4 mr-2"><circle cx="12" cy="12" r="10">
                    </circle><path d="M8 12h8"></path><path d="M12 8v8"></path>
                    </svg>Save Note
                    </button>
            </div>
        </div>
    </div>
  )
}

export default Form