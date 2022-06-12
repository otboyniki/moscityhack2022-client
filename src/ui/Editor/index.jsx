import React from 'react';
import { RichUtils } from 'draft-js';
import DraftEditor from 'draft-js-plugins-editor';
import createImagePlugin from 'draft-js-image-plugin';
import 'draft-js/dist/Draft.css';

import AddPhotoAlternate from '@mui/icons-material/AddPhotoAlternate';
import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';
import FormatListBulleted from '@mui/icons-material/FormatListBulleted';
import FormatListNumbered from '@mui/icons-material/FormatListNumbered';
import FormatUnderlined from '@mui/icons-material/FormatUnderlined';

import { Input } from '@mui/material';

import { BlockTypes, InlineStyles } from './constants';

import S from './styles';

const imagePlugin = createImagePlugin();
const plugins = [imagePlugin];

const Editor = (props) => {
  const {
    editorState,
    onChange,
    onUpload,
  } = props;

  const toggleInlineStyle = (style) => {
    onChange(RichUtils.toggleInlineStyle(editorState, style));
  };

  const toggleBlockType = (style) => {
    onChange(RichUtils.toggleBlockType(editorState, style));
  };

  return (
    <S.Container>
      <S.Toolbar>
        <S.ToolbarButton
          type="button"
          onClick={() => toggleInlineStyle(InlineStyles.Bold)}
        >
          <FormatBold />
        </S.ToolbarButton>
        <S.ToolbarButton
          type="button"
          onClick={() => toggleInlineStyle(InlineStyles.Italic)}
        >
          <FormatItalic />
        </S.ToolbarButton>
        <S.ToolbarButton
          type="button"
          onClick={() => toggleInlineStyle(InlineStyles.Underline)}
        >
          <FormatUnderlined />
        </S.ToolbarButton>
        <S.ToolbarButton
          type="button"
          onClick={() => toggleBlockType(BlockTypes.Ol)}
        >
          <FormatListNumbered />
        </S.ToolbarButton>
        <S.ToolbarButton
          type="button"
          onClick={() => toggleBlockType(BlockTypes.Ul)}
        >
          <FormatListBulleted />
        </S.ToolbarButton>
        <S.ToolbarLabel>
          <AddPhotoAlternate />
          <Input
            type="file"
            onChange={onUpload}
            inputProps={{ accept: 'image/*' }}
          />
        </S.ToolbarLabel>
      </S.Toolbar>
      <S.Editor>
        <DraftEditor
          editorState={editorState}
          onChange={onChange}
          plugins={plugins}
        />
      </S.Editor>
    </S.Container>
  );
};

export default Editor;
