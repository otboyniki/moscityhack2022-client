import React, { useEffect } from 'react';
import { EditorState, AtomicBlockUtils } from 'draft-js';

import useUpload from '@/hooks/useUpload';

import Editor from '@/ui/Editor';

const StoryEditor = (props) => {
  const {
    editorState,
    onChange,
  } = props;

  const {
    lastUploadedFile,
    upload,
  } = useUpload();

  const insertImage = (url) => {
    const contentState = editorState.getCurrentContent();

    const contentStateWithEntity = contentState.createEntity(
      'IMAGE',
      'IMMUTABLE',
      { src: url },
    );

    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
    return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ');
  };

  useEffect(() => {
    if (lastUploadedFile) {
      onChange(insertImage(`/api/files/${lastUploadedFile}`));
    }
  }, [lastUploadedFile]);

  const handleUpload = ({ target }) => {
    const [file] = target.files;

    upload(file);
  };

  return (
    <Editor
      editorState={editorState}
      onChange={onChange}
      onUpload={handleUpload}
    />
  );
};

export default StoryEditor;
