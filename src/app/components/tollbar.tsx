'use client'

import React from 'react'
import { Editor } from '@tiptap/react'
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from 'lucide-react'

interface ToolbarProps {
  editor: Editor | null
}

export default function Toolbar({ editor }: ToolbarProps) {
  if (!editor) return null

  const insertImageFromFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()

    reader.onload = () => {
      const result = reader.result as string
      editor.chain().focus().setImage({ src: result }).run()
    }

    reader.readAsDataURL(file)
  }

  return (
    <div className='tollbar' style={{ marginBottom: '10px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {/* Text formatting */}
      <button onClick={() => editor.chain().focus().toggleBold().run()} type="button"><b>B</b></button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()} type="button"><i>I</i></button>
      <button onClick={() => editor.chain().focus().toggleUnderline().run()} type="button"><u>U</u></button>

      {/* Font size */}
      <input
        type="number"
        onChange={(e) => {
          const value = e.target.value + 'px'
          editor.chain().focus().setFontSize(value).run()
        }}
        placeholder="Размер"
        style={{ width: '80px' }}
        min={1}
      />

      {/* Font color */}
      <input
        type="color"
        onChange={(e) => {
          editor.chain().focus().setColor(e.target.value).run()
        }}
        title="Цвет текста"
      />

      {/* Paragraph / heading */}
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} type="button">H1</button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} type="button">H2</button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} type="button">H3</button>

      {/* Alignment */}

      <button onClick={() => editor.chain().focus().setTextAlign('left').run()} type="button">
        <AlignLeft size={20} />
      </button>
      <button onClick={() => editor.chain().focus().setTextAlign('center').run()} type="button">
        <AlignCenter size={20} />
      </button>
      <button onClick={() => editor.chain().focus().setTextAlign('right').run()} type="button">
        <AlignRight size={20} />
      </button>
      <button onClick={() => editor.chain().focus().setTextAlign('justify').run()} type="button">
        <AlignJustify size={20} />
      </button>


      {/* Media */}
      <label
        htmlFor="image-upload"
        style={{
          display: 'inline-block',
          padding: '6px 12px',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '4px',
          cursor: 'pointer',
          marginLeft: '10px',
        }}
      >
        Загрузить изображение
      </label>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={insertImageFromFile}
        style={{ display: 'none' }} // прячем оригинальный input
      />
    </div>
  )
}
