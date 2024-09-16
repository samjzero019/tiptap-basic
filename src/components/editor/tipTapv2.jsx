import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// import "./styles.scss";

import "tailwindcss/tailwind.css";

const initialValue =
	"<h1>Medical Report</h1><h2>Patient Information</h2><ul><li><strong>Name:</strong> Emilio Ferruggia</li><li><strong>Date of Accident:</strong> July 5th</li><li><strong>Location of Accident:</strong> Thousand Oaks</li></ul><h2>Accident Description</h2><p>Emilio Ferruggia was driving straight with the flow of traffic when another driver turned left from a middle section and hit his driver door. The impact also affected the front fender. Emilio did not lose consciousness and did not call the police or an ambulance. He was shaken up but did not seek immediate medical attention.</p><h2>Initial Medical Consultation</h2><ul><li><strong>First Doctor Seen:</strong> Dr. Khalili</li><li><strong>Prescribed Medication:</strong> Unknown</li></ul><h2>Symptoms and Pain Assessment</h2><h2>Low Back Pain</h2><ul><li><strong>Location:</strong> Low back</li><li><strong>Frequency:</strong> Whenever lifting something heavy</li><li><strong>Type of Pain:</strong> Numbness, occasionally sharp</li><li><strong>Pain Radiation:</strong> Does not radiate to the leg</li><li><strong>Pain Level:</strong> 7 out of 10</li><li><strong>Aggravating Factors:</strong> Working, lifting, walking, running</li><li><strong>Alleviating Factors:</strong> Medication, elevating, relaxing</li></ul><h2>Neck Pain</h2><ul><li><strong>Frequency:</strong> Comes and goes</li><li><strong>Type of Pain:</strong> Sharp</li><li><strong>Pain Radiation:</strong> Travels to shoulder and arm</li><li><strong>Pain Level:</strong> 7 out of 10</li><li><strong>Aggravating Factors:</strong> Turning and working</li><li><strong>Alleviating Factors:</strong> Stretch, rest, over-the-counter medication</li></ul><h2>Knee Pain</h2><ul><li><strong>Location:</strong> Right knee</li><li><strong>Frequency:</strong> When standing for too long</li><li><strong>Type of Pain:</strong> Achy, swelling</li><li><strong>Pain Level:</strong> 5 out of 10</li><li><strong>Aggravating Factors:</strong> Standing for extended periods</li><li><strong>Alleviating Factors:</strong> Rest, medication, walking</li></ul><h2>Past Health History</h2><ul><li><strong>Surgeries:</strong> <ul><li>[object Object]</li><li>[object Object]</li></ul></li><li><strong>Pain in Previous Surgery Areas:</strong> Knee pain has worsened since the accident</li></ul><h2>Physical Examination</h2><ul><li><strong>Neck Range of Motion:</strong> <ul><li>Forward flexion: 40 degrees</li><li>Backward extension: 40 degrees</li><li>Left rotation: 40 degrees</li><li>Right rotation: 50 degrees</li><li>Right lateral flexion: 20 degrees</li><li>Left lateral flexion: 30 degrees</li></ul></li><li><strong>Back Range of Motion:</strong> <ul><li>Forward flexion: 30 degrees</li><li>Backward extension: 10 degrees</li><li>Left rotation: 20 degrees</li><li>Right rotation: 30 degrees</li><li>Left lateral flexion: 15 degrees</li><li>Right lateral flexion: 10 degrees</li></ul></li><li><strong>Knee Range of Motion:</strong> Full range of motion in the right knee with pain</li><li><strong>Tenderness and Spasms:</strong> <ul><li>Cervical: C2 to C7</li><li>Thoracic: T1 to T5</li><li>Lumbar: L2 to S1</li></ul></li><li><strong>Muscle Testing:</strong> <ul><li>Right lower extremity: 4 out of 5</li><li>Upper extremity: 5 out of 5</li></ul></li><li><strong>Sensation:</strong> Increased sensation in the right lower extremity</li></ul><h2>Treatment Plan</h2><ul><li><strong>Frequency:</strong> Three times a week (Tuesday, Thursday, Friday)</li><li><strong>X-rays:</strong> X-ray of the right knee was performed</li></ul><h2>Additional Notes</h2><p>No problems with hips or shoulders. No numbness or tingling in fingers. Patient cannot touch toes when bending forward.</p>";

const TiptapEditor = () => {
	const editor = useEditor({
		extensions: [StarterKit],
		content: initialValue,
		immediatelyRender: false,
	});

	if (!editor) {
		return null;
	}

	return (
		<div className="rounded-lg border p-4 bg-white shadow-md">
			{/* Toolbar */}
			<div className="flex space-x-2 border-b pb-2 mb-2">
				<button
					onClick={() => editor.chain().focus().toggleBold().run()}
					disabled={!editor.can().chain().focus().toggleBold().run()}
					className={`px-2 py-1 rounded ${
						editor.isActive("bold") ? "bg-blue-500 text-white" : "bg-gray-200"
					}`}
				>
					<b>B</b>
				</button>
				<button
					onClick={() => editor.chain().focus().toggleItalic().run()}
					disabled={!editor.can().chain().focus().toggleItalic().run()}
					className={`px-2 py-1 rounded ${
						editor.isActive("italic") ? "bg-blue-500 text-white" : "bg-gray-200"
					}`}
				>
					<i>I</i>
				</button>
				<button
					onClick={() => editor.chain().focus().toggleStrike().run()}
					disabled={!editor.can().chain().focus().toggleStrike().run()}
					className={`px-2 py-1 rounded ${
						editor.isActive("strike") ? "bg-blue-500 text-white" : "bg-gray-200"
					}`}
				>
					<s>S</s>
				</button>
				<button
					onClick={() => editor.chain().focus().toggleCodeBlock().run()}
					disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
					className={`px-2 py-1 rounded ${
						editor.isActive("codeBlock")
							? "bg-blue-500 text-white"
							: "bg-gray-200"
					}`}
				>
					<code>&lt;/&gt;</code>
				</button>
				<button
					onClick={() => editor.chain().focus().setBlockquote().run()}
					disabled={!editor.can().chain().focus().setBlockquote().run()}
					className={`px-2 py-1 rounded ${
						editor.isActive("blockquote")
							? "bg-blue-500 text-white"
							: "bg-gray-200"
					}`}
				>
					&quot;
				</button>
				<button
					onClick={() => editor.chain().focus().setParagraph().run()}
					className={`px-2 py-1 rounded ${
						editor.isActive("paragraph")
							? "bg-blue-500 text-white"
							: "bg-gray-200"
					}`}
				>
					P
				</button>
				<button
					onClick={() => editor.chain().focus().setHeading({ level: 1 }).run()}
					className={`px-2 py-1 rounded ${
						editor.isActive("heading", { level: 1 })
							? "bg-blue-500 text-white"
							: "bg-gray-200"
					}`}
				>
					H1
				</button>
				<button
					onClick={() => editor.chain().focus().setHeading({ level: 2 }).run()}
					className={`px-2 py-1 rounded ${
						editor.isActive("heading", { level: 2 })
							? "bg-blue-500 text-white"
							: "bg-gray-200"
					}`}
				>
					H2
				</button>
				<button
					onClick={() => editor.chain().focus().toggleBulletList().run()}
					className={`px-2 py-1 rounded ${
						editor.isActive("bulletList")
							? "bg-blue-500 text-white"
							: "bg-gray-200"
					}`}
				>
					•
				</button>
				<button
					onClick={() => editor.chain().focus().toggleOrderedList().run()}
					className={`px-2 py-1 rounded ${
						editor.isActive("orderedList")
							? "bg-blue-500 text-white"
							: "bg-gray-200"
					}`}
				>
					1.
				</button>
			</div>

			{/* Editor Content */}
			<EditorContent editor={editor} className="prose max-w-full" />
		</div>
	);
};

export default TiptapEditor;
