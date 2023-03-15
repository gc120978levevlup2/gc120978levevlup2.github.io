
let items = []

// models
import { supa      } from "/assets/model/remote/supabase.js"
import { del_image } from "/assets/model/remote/file.js"

const create_item = async ( item , on_successfull_transaction = null) => {
    items = []
    const {data, error} = await supa
                          .from("items")
                          .insert(item)
                          .select()
    data.forEach((item) => {
        items.push(item)
    })

    //console.log("created item")
    //console.log({data, error})

    if (on_successfull_transaction){
        on_successfull_transaction(items)
    }
}

const read_items = async (id = null, on_successfull_transaction = null) => {
    items = []
    const {data,error} = await supa
                                .from("items")
                                .select('*')
    data.forEach((item) => {
        items.push(item)
    })

    if (on_successfull_transaction){
        if (id){
            on_successfull_transaction(items.filter((item) => item.id === id))
        }else{
            on_successfull_transaction(items)
        }
    }
}

const read_items_fr_seller = async (seller = null, on_successfull_transaction = null) => {
    items = []
    const {data,error} = await supa
                                .from("items")
                                .select('*')
    data.forEach((item) => {
        items.push(item)
    })

    if (on_successfull_transaction){
        if (seller){
            on_successfull_transaction(items.filter((item) => item.seller_email1 === seller.email1))
        }else{
            on_successfull_transaction(items)
        }
    }
}

const read_items_fr_category = async (category = null, on_successfull_transaction = null) => {
    items = []
    const {data,error} = await supa
                                .from("items")
                                .select('*')
    data.forEach((item) => {
        items.push(item)
    })

    if (on_successfull_transaction){
        if (seller){
            on_successfull_transaction(items.filter((item) => item.category_id === category.id))
        }else{
            on_successfull_transaction(items)
        }
    }
}

const read_items_fr_search = async (search = null, on_successfull_transaction = null) => {
    items = []
    const {data,error} = await supa
                                .from("items")
                                .select('*')
    data.forEach((item) => {
        items.push(item)
    })

    if (on_successfull_transaction){
        if (seller){
            on_successfull_transaction(items.filter((item) => (item.description.toUpperCase().includes(search) || item.specs.toUpperCase().includes(search)) ))
        }else{
            on_successfull_transaction(items)
        }
    }
}



const update_item = async ( item , on_successfull_transaction = null) => {
    items = []
    const {data, error} = await supa
                          .from("items")
                          .update(item)
                          .eq('id', item.id)
                          .select()
    console.log(item.id)
    console.log(data)
    console.log(error)    

    data.forEach((item) => {
        items.push(item)
    })

    if (on_successfull_transaction){
        on_successfull_transaction(items)
    }
}

const delete_item = async ( id , on_successfull_transaction = null) => {
    // delete items imagess
    read_items(id, values => {
        if (values.length === 1){
            let del1 = [values[0].main_image]
            let del2 = values[0].images.replace('[','').replace(']','')
            del2 = `[${del2}]`
            let del = [...del1, ...(JSON.parse(del2))]
            del_image(del)
        }
    })        
    items = []
    const {error} = await supa
                          .from("items")
                          .delete()
                          .eq('id', id)

    if (on_successfull_transaction){
        on_successfull_transaction(error)
    }
}

export {
         create_item, 
         read_items,
         read_items_fr_seller,
         read_items_fr_category,
         read_items_fr_search,
         update_item,
         delete_item,
}