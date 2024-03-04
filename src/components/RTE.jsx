import React from 'react'
import {Controller} from "react-hook-form"
import {Editor} from "@tinymce/tinymce-react"


function RTE({
    name, control, label, defaultValue = ""
}) {
  return (
    <>
    {
        label && <label className='inline-block mb-1 pl-1 text-xl font-Roboto'> {label}</label>
    }
    <div className='w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg mb-4'>
        <Controller
        name={name || "content"}
        control={control}
        render={({field: {onChange}}) => (
            <Editor
            apiKey='priwhff6n7srbgbagrcf3sr8ignhuc0wt7fk160arubpm8wg'
            initialValue={defaultValue}
            init={{
                branding: false,
                height: 500,
                menubar: true,
                plugins: [
                    "image",
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                    "anchor",
                ],
                toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
            />
        )}
        />
    </div>
    </>
  )
}

export default RTE