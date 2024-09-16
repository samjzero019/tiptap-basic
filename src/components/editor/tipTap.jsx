"use client";

import React from "react";
import {
	useEditor,
	EditorContent,
	EditorProvider,
	useCurrentEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Paragraph from "@tiptap/extension-paragraph";
import Heading from "@tiptap/extension-heading";

const initialValue =
	"<h1>Medical Report</h1><h2>Patient Information</h2><ul><li><strong>Name:</strong> Emilio Ferruggia</li><li><strong>Date of Accident:</strong> July 5th</li><li><strong>Location of Accident:</strong> Thousand Oaks</li></ul><h2>Accident Description</h2><p>Emilio Ferruggia was driving straight with the flow of traffic when another driver turned left from a middle section and hit his driver door. The impact also affected the front fender. Emilio did not lose consciousness and did not call the police or an ambulance. He was shaken up but did not seek immediate medical attention.</p><h2>Initial Medical Consultation</h2><ul><li><strong>First Doctor Seen:</strong> Dr. Khalili</li><li><strong>Prescribed Medication:</strong> Unknown</li></ul><h2>Symptoms and Pain Assessment</h2><h2>Low Back Pain</h2><ul><li><strong>Location:</strong> Low back</li><li><strong>Frequency:</strong> Whenever lifting something heavy</li><li><strong>Type of Pain:</strong> Numbness, occasionally sharp</li><li><strong>Pain Radiation:</strong> Does not radiate to the leg</li><li><strong>Pain Level:</strong> 7 out of 10</li><li><strong>Aggravating Factors:</strong> Working, lifting, walking, running</li><li><strong>Alleviating Factors:</strong> Medication, elevating, relaxing</li></ul><h2>Neck Pain</h2><ul><li><strong>Frequency:</strong> Comes and goes</li><li><strong>Type of Pain:</strong> Sharp</li><li><strong>Pain Radiation:</strong> Travels to shoulder and arm</li><li><strong>Pain Level:</strong> 7 out of 10</li><li><strong>Aggravating Factors:</strong> Turning and working</li><li><strong>Alleviating Factors:</strong> Stretch, rest, over-the-counter medication</li></ul><h2>Knee Pain</h2><ul><li><strong>Location:</strong> Right knee</li><li><strong>Frequency:</strong> When standing for too long</li><li><strong>Type of Pain:</strong> Achy, swelling</li><li><strong>Pain Level:</strong> 5 out of 10</li><li><strong>Aggravating Factors:</strong> Standing for extended periods</li><li><strong>Alleviating Factors:</strong> Rest, medication, walking</li></ul><h2>Past Health History</h2><ul><li><strong>Surgeries:</strong> <ul><li>[object Object]</li><li>[object Object]</li></ul></li><li><strong>Pain in Previous Surgery Areas:</strong> Knee pain has worsened since the accident</li></ul><h2>Physical Examination</h2><ul><li><strong>Neck Range of Motion:</strong> <ul><li>Forward flexion: 40 degrees</li><li>Backward extension: 40 degrees</li><li>Left rotation: 40 degrees</li><li>Right rotation: 50 degrees</li><li>Right lateral flexion: 20 degrees</li><li>Left lateral flexion: 30 degrees</li></ul></li><li><strong>Back Range of Motion:</strong> <ul><li>Forward flexion: 30 degrees</li><li>Backward extension: 10 degrees</li><li>Left rotation: 20 degrees</li><li>Right rotation: 30 degrees</li><li>Left lateral flexion: 15 degrees</li><li>Right lateral flexion: 10 degrees</li></ul></li><li><strong>Knee Range of Motion:</strong> Full range of motion in the right knee with pain</li><li><strong>Tenderness and Spasms:</strong> <ul><li>Cervical: C2 to C7</li><li>Thoracic: T1 to T5</li><li>Lumbar: L2 to S1</li></ul></li><li><strong>Muscle Testing:</strong> <ul><li>Right lower extremity: 4 out of 5</li><li>Upper extremity: 5 out of 5</li></ul></li><li><strong>Sensation:</strong> Increased sensation in the right lower extremity</li></ul><h2>Treatment Plan</h2><ul><li><strong>Frequency:</strong> Three times a week (Tuesday, Thursday, Friday)</li><li><strong>X-rays:</strong> X-ray of the right knee was performed</li></ul><h2>Additional Notes</h2><p>No problems with hips or shoulders. No numbness or tingling in fingers. Patient cannot touch toes when bending forward.</p>";

const MenuBar = () => {
	const { editor } = useCurrentEditor();

	if (!editor) {
		return null;
	}

	return (
		<div className="bg-gray-200 p-1 px-2 shadow-md">
			<div className="flex flex-wrap gap-2 text-sm font-roboto">
				<button
					onClick={() => editor.chain().focus().toggleBold().run()}
					disabled={!editor.can().chain().focus().toggleBold().run()}
					className={`px-3 py-1 rounded transition-colors duration-200 ${
						editor.isActive("bold")
							? "bg-blue-500 text-white"
							: "bg-white hover:bg-blue-100"
					}`}
				>
					Bold
				</button>
				<button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 1 }).run()
					}
					className={`px-3 py-1 rounded transition-colors duration-200 ${
						editor.isActive("heading", { level: 1 })
							? "bg-blue-500 text-white"
							: "bg-white hover:bg-blue-100"
					}`}
				>
					H1
				</button>
				<button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 2 }).run()
					}
					className={`px-3 py-1 rounded transition-colors duration-200 ${
						editor.isActive("heading", { level: 2 })
							? "bg-blue-500 text-white"
							: "bg-white hover:bg-blue-100"
					}`}
				>
					H2
				</button>
				<button
					onClick={() => editor.chain().focus().toggleBulletList().run()}
					className={`px-3 py-1 rounded transition-colors duration-200 ${
						editor.isActive("bulletList")
							? "bg-blue-500 text-white"
							: "bg-white hover:bg-blue-100"
					}`}
				>
					Bullet List
				</button>
				<button
					onClick={() => editor.chain().focus().toggleOrderedList().run()}
					className={`px-3 py-1 rounded transition-colors duration-200 ${
						editor.isActive("orderedList")
							? "bg-blue-500 text-white"
							: "bg-white hover:bg-blue-100"
					}`}
				>
					Ordered List
				</button>
			</div>
		</div>
	);
};

const extensions = [
	StarterKit.configure({
		bulletList: {
			keepMarks: true,
			keepAttributes: false,
			HTMLAttributes: {
				class: "list-disc ",
			},
		},
		orderedList: {
			keepMarks: true,
			keepAttributes: false,
			HTMLAttributes: {
				class: "list-decimal ",
			},
		},
	}),
	Paragraph.configure({
		HTMLAttributes: {
			class: "mb-4",
		},
	}),
	Heading.configure({
		levels: [1, 2, 3],
		HTMLAttributes: {
			class: "heading",
		},
	}),
];

const Tiptap = () => {
	return (
		<div className="flex flex-col h-screen">
			<div className="flex-grow overflow-hidden">
				<EditorProvider
					slotBefore={<MenuBar />}
					extensions={extensions}
					content={initialValue}
					editorProps={{
						attributes: {
							class:
								" bg-white-100 border shadow-md prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
						},
					}}
					immediatelyRender={false}
				>
					<EditorContent className="max-h-[calc(100vh-12rem)] overflow-y-auto p-6 rounded-b-lg shadow-lg" />
				</EditorProvider>
			</div>
		</div>
	);
};

export default Tiptap;
