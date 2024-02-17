import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { initialContent } from './InitialContent'
import { RxFontBold, RxFontItalic, RxStrikethrough, RxCode, RxChevronDown, RxChatBubble } from "react-icons/rx";

export function Editor(){ 
    const editor = useEditor({ 
        extensions: [StarterKit], 
        content: initialContent,
        editorProps: { 
            attributes: { 
                class: 'outline-none',
            }
        }
    })

    return ( 
        <>
            <EditorContent 
                className='max-w-[700px] mx-auto pt-16 prose prose-zinc'
                editor={editor}
            />
            
            {editor && (
            <BubbleMenu className="bg-white shadow-xl border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x dividex-zinc-700" editor = {editor}>

                <button className="p-2 text-zinc-600 text-sm flex items-center gap-1.5 hover:text-zinc-600 hover:bg-zinc-50">Text<RxChevronDown className='h-4 w-4'/></button>    
                <button className="p-2 text-zinc-600 text-sm flex items-center gap-1.5 hover:text-zinc-600 hover:bg-zinc-50">Comment<RxChatBubble className='h-4 w-4'/></button>  

                <div className="flex items-center">
                    <button className="p-2 text-zinc-600 text-sm flex items-center gap-1.5 hover:text-zinc-600 hover:bg-zinc-50" onClick={() => editor.chain().focus().toggleBold().run()}><RxFontBold className='h-4 w-4' /></button>    
                    <button className="p-2 text-zinc-600 text-sm flex items-center gap-1.5 hover:text-zinc-600 hover:bg-zinc-50" onClick={() => editor.chain().focus().toggleItalic().run()}><RxFontItalic className='h-4 w-4'/></button>    
                    <button className="p-2 text-zinc-600 text-sm flex items-center gap-1.5 hover:text-zinc-600 hover:bg-zinc-50" onClick={() => editor.chain().focus().toggleStrike().run()}><RxStrikethrough className='h-4 w-4'/></button>    
                    <button className="p-2 text-zinc-600 text-sm flex items-center gap-1.5 hover:text-zinc-600 hover:bg-zinc-50" onClick={() => editor.chain().focus().toggleCodeBlock().run()}><RxCode className='h-4 w-4'/></button>    
                </div>    
            </BubbleMenu>    
            ) }
        </>
    )
}
