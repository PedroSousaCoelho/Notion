import { BubbleMenu, EditorContent, useEditor, FloatingMenu } from '@tiptap/react'
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
                <FloatingMenu className="bg-white py-2 px-1 shadow-xl gap-1 border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex flex-col " editor={editor} shouldShow={({state })=>{ 
                    const {$from} = state.selection 
                    const currentLineText = $from.nodeBefore?.textContent
                    return currentLineText ==='/'
                }}> 
                    <button className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600" >
                        <img src="https://www.notion.so/images/blocks/text/en-US.png" alt="text" className="w-12 border border-zinc-600 rounded" />
                        <div className='flex flex-col text-left hover:text-white'>
                            <span className="text-sm">Text</span>
                            <span className='text=xs '>Just start writing with pain text</span>
                            
                        </div>
                    </button>
                   
                    <button className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
                        <img src="https://www.notion.so/images/blocks/header.57a7576a.png" alt="text" className="w-12 border border-zinc-600 rounded" />
                        <div className='flex flex-col text-left hover:text-white'>
                            <span className="text-sm">Heading 1</span>
                            <span className='text=xs '>Big Section Heading</span>
                            
                        </div>
                    </button>

                    <button className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
                        <img src="https://www.notion.so/images/blocks/subheader.9aab4769.png" alt="text" className="w-12 border border-zinc-600 rounded" />
                        <div className='flex flex-col text-left hover:text-white'>
                            <span className="text-sm">Heading 2</span>
                            <span className='text=xs '>Medium Section Heading</span>        
                        </div>
                    </button>

                    <button className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600" onClick={() => editor.chain().focus().toggleBulletList().run()}>
                        <img src="https://www.notion.so/images/blocks/bulleted-list.0e87e917.png" alt="text" className="w-12 border border-zinc-600 rounded" />
                        <div className='flex flex-col text-left hover:text-white'>
                            <span className="text-sm">Bullet List</span>
                            <span className='text=xs '>List</span>        
                        </div>
                    </button>
                </FloatingMenu>
            )}

            {editor && (
            <BubbleMenu className="bg-white shadow-xl border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x dividex-zinc-700" editor = {editor}>

                <button className="p-2 text-zinc-600 text-sm flex items-center gap-1.5 hover:text-zinc-600 hover:bg-zinc-50">Text<RxChevronDown className='h-4 w-4'/></button>    
                <button className="p-2 text-zinc-600 text-sm flex items-center gap-1.5 hover:text-zinc-600 hover:bg-zinc-50">Comment<RxChatBubble className='h-4 w-4'/></button>  

                <div className="flex items-center">
                    <button className="p-2 text-zinc-600 text-sm flex items-center gap-1.5 hover:text-zinc-600 hover:bg-zinc-50" onClick={() => editor.chain().focus().toggleBold().run()} ><RxFontBold className='h-4 w-4' /></button>    
                    <button className="p-2 text-zinc-600 text-sm flex items-center gap-1.5 hover:text-zinc-600 hover:bg-zinc-50" onClick={() => editor.chain().focus().toggleItalic().run()}><RxFontItalic className='h-4 w-4'/></button>    
                    <button className="p-2 text-zinc-600 text-sm flex items-center gap-1.5 hover:text-zinc-600 hover:bg-zinc-50" onClick={() => editor.chain().focus().toggleStrike().run()}><RxStrikethrough className='h-4 w-4'/></button>    
                    <button className="p-2 text-zinc-600 text-sm flex items-center gap-1.5 hover:text-zinc-600 hover:bg-zinc-50" onClick={() => editor.chain().focus().toggleCodeBlock().run()}><RxCode className='h-4 w-4'/></button>    
                </div>    
            </BubbleMenu>    
            ) }
        </>
    )
}
