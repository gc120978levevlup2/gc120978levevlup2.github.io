
let users = [
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

const read_users = async (email1 = null, on_successfull_transaction = null) => {
    users = []
    const {data,error} = await supa
                                .from("users")
                                .select('*')
    console.log(data)
    data.forEach((item) => {
        users.push(item)
    })

    if (on_successfull_transaction){
        if (email1){
            on_successfull_transaction(users.filter((user) => user.email1 === email1))
        }else{
            on_successfull_transaction(users)
        }
    }
}

const create_user = async ( user , on_successfull_transaction = null, on_failed_transaction) => {
    read_users (user.email1, async data => {
        if (data.length === 0){
            users = []
            const {data2, error2} = await supa
                                .from("users")
                                .insert(user)
                                .select()
                                
            data2.forEach((item) => {
                users.push(item)
            })

            if (on_successfull_transaction){
                on_successfull_transaction(users)
            }
        }else{
            on_failed_transaction(error2)
        }
    })
}

const update_user = async ( user , on_successfull_transaction = null) => {
    users = []
    const {data, error} = await supa
                          .from("users")
                          .update(user)
                          .eq('email1', user.email1)
                          .select()
    data.forEach((item) => {
        users.push(item)
    })

    if (on_successfull_transaction){
        on_successfull_transaction(users)
    }
}

const delete_user = async ( email1 , on_successfull_transaction = null) => {
    // delete user imagess
    read_users(email1, values => {
        if (values.length === 1){
            let del = [values[0].img]
            del_image(del)
        }
    })  
    users = []
    const {error} = await supa
                          .from("users")
                          .delete()
                          .eq('email1', email1)
    if (on_successfull_transaction){
        on_successfull_transaction(error)
    }
}

export {
         create_user, 
         read_users,
         update_user,
         delete_user,
}