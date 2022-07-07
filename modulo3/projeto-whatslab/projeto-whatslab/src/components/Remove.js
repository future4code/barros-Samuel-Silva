import Chat from "./Chat"

const Remove=(indexRemove)=>{                         //remover por indice
    const novoChat=chat.filter((item,index)=>{
        return index!==indexRemove
       })
    setChat(novoChat)
}

export default Remove;