import React, { useState } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import parse from 'html-react-parser';

import "./Editor.css";


function Editor() {
    const [text, setText] = useState("")
    return (
        <div className="col-lg-8 offset-lg-0">
            <label>Editor</label>
            <div className="editor">
                <CKEditor
                    className="editor2"
                    editor={ClassicEditor}
                    data={text}
                    onChange={(event, editor) => {
                        const data = editor.getData()
                        setText(data)
                    }} />
            </div>
            <div>
                <h2>Content</h2>
                <p>{parse(text)}</p>
            </div>
        </div >
    );
}

export default Editor;