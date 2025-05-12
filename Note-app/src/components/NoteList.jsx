import React, { useState } from "react";

function NoteList({ notes, deleteNote, updateNote }) {
	const [editingNoteId, setEditingNoteId] = useState(null);
	const [editedTitle, setEditedTitle] = useState("");
	const [editedContent, setEditedContent] = useState("");

	const startEditing = (note) => {
		setEditingNoteId(note.id);
		setEditedTitle(note.title);
		setEditedContent(note.content);
	};

	const cancelEditing = () => {
		setEditingNoteId(null);
		setEditedTitle("");
		setEditedContent("");
	};

	const saveEditedNote = () => {
		if (editedTitle.trim() && editedContent.trim()) {
			updateNote({
				id: editingNoteId,
				title: editedTitle.trim(),
				content: editedContent.trim(),
				createdAt: new Date().toISOString(),
			});
			cancelEditing();
		}
	};

	return (
		<div className="space-y-4">
			{notes.length === 0 ? (
				<div className="text-center py-12">
					<p className="text-gray-500">
						No notes found. Create your first note!
					</p>
				</div>
			) : (
				notes.map((note) => (
					<div
						key={note.id}
						className="bg-white rounded-lg shadow-sm overflow-hidden border-l-4 border-emerald-500 transition-all hover:shadow-md">
						<div className="p-5">
							{editingNoteId === note.id ? (
								<>
									<input
										type="text"
										className="w-full border rounded px-3 py-2 mb-2"
										value={editedTitle}
										onChange={(e) => setEditedTitle(e.target.value)}
										placeholder="Edit title"
									/>
									<textarea
										className="w-full border rounded px-3 py-2 mb-4"
										value={editedContent}
										onChange={(e) => setEditedContent(e.target.value)}
										placeholder="Edit content"
									/>
									<div className="flex justify-end space-x-2">
										<button
											onClick={saveEditedNote}
											className="px-4 py-1.5 text-sm bg-emerald-600 text-white rounded hover:bg-emerald-700">
											Save
										</button>
										<button
											onClick={cancelEditing}
											className="px-4 py-1.5 text-sm bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
											Cancel
										</button>
									</div>
								</>
							) : (
								<>
									<h3 className="text-lg font-medium text-gray-800 mb-2">
										{note.title}
									</h3>
									<p className="text-gray-600 mb-4">{note.content}</p>
									<div className="flex justify-end space-x-2">
										<button
											onClick={() => startEditing(note)}
											className="px-3 py-1.5 text-sm border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
											Edit
										</button>
										<button
											onClick={() => deleteNote(note.id)}
											className="px-3 py-1.5 text-sm border border-transparent rounded-md text-white bg-red-600 hover:bg-red-700">
											Delete
										</button>
									</div>
								</>
							)}
						</div>
					</div>
				))
			)}
		</div>
	);
}

export default NoteList;
