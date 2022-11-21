import React, { useState } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import parse from 'html-react-parser';

import "./Editor.css";

function Editor(props) {
    return (
        <div className="col-lg-8 offset-lg-0">
            <label>Editor</label>
            <div className="editor">
                <CKEditor
                    className="editor2"
                    editor={ClassicEditor}
                    data={props.articleBody}
                    onChange={(event, editor) => {
                        const data = editor.getData()
                        props.setArticleBody(data)
                    }} />
            </div>
        </div >
    );
}

export default Editor;