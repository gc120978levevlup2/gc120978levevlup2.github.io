
let sellers = [
    {
        email1    : "gc120978levelup1@gmail.com",
        password1 : "1",
        name      : "Garry M. Cacho",
        contact   : "0999-520-2547",
        address   : "Purok Waling Waling San Nicolas Dapitan City",
        img       : "/assets/view/img/users/image0001.jpg",
    },
    {
        email1    : "gc120978levelup1@live.com",
        password1 : "1",
        name      : "James M. Cacho",
        contact   : "+10999-520-2547",
        address   : "Purok Waling Waling San Nicolas Dipolog City",
        img       : "/assets/view/img/users/image0002.jpg",
    }
]

// models
import { supa      } from "/assets/model/remote/supabase.js"
import { del_image } from "/assets/model/remote/file.js"

const read_sellers = async (email1 = null, on_successfull_transaction = null) => {
    sellers = []
    const {data,error} = await supa
                                .from("sellers")
                                .select('*')
    data.forEach((item) => {
        sellers.push(item)
    })

    if (on_successfull_transaction){
        if (email1){
            on_successfull_transaction(sellers.filter((seller) => seller.email1 === email1))
        }else{
            on_successfull_transaction(sellers)
        }
    }
}

const read_sellers2 = async (email1 = null) => {
    sellers = []
    const {data,error} = await supa
                                .from("sellers")
                                .select('*')
    data.forEach((item) => {
        sellers.push(item)
    })

    return (
        sellers.filter((seller) => seller.email1 === email1)
    )
}

const create_seller = async ( seller , on_successfull_transaction = null, on_failed_transaction) => {
    read_sellers (seller.email1, async data2 => {
        if (data2.length === 0){
            sellers = []
            const {data, error} = await supa
                                .from("sellers")
                                .insert(seller)
                                .select()
                                
            data.forEach((item) => {
                sellers.push(item)
            })

            if (on_successfull_transaction){
                on_successfull_transaction(sellers)
            }
        }else{
            on_failed_transaction(error2)
        }
    })
}

const update_seller = async ( seller , on_successfull_transaction = null) => {
    sellers = []
    const {data, error} = await supa
                          .from("sellers")
                          .update(seller)
                          .eq('email1', seller.email1)
                          .select()
    data.forEach((item) => {
        sellers.push(item)
    })

    if (on_successfull_transaction){
        on_successfull_transaction(sellers)
    }
}

const delete_seller = async ( email1 , on_successfull_transaction = null) => {
    // delete seller imagess
    read_sellers(email1, values => {
        if (values.length === 1){
            let del = [values[0].img]
            del_image(del)
        }
    })  
    sellers = []
    const {error} = await supa
                          .from("sellers")
                          .delete()
                          .eq('email1', email1)
    if (on_successfull_transaction){
        on_successfull_transaction(error)
    }
}

export {
         create_seller, 
         read_sellers,
         read_sellers2,
         update_seller,
         delete_seller,
}