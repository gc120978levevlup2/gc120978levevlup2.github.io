function showModal(modal_form){
    var formModal = new bootstrap.Modal(
    document.getElementById(modal_form),
        {
        keyboard: false,
        }
    );
    formModal.show();
}

function showModal_with_data(modal_form, on_show_is_done){
    var formModal = new bootstrap.Modal(
    document.getElementById(modal_form),
        {
        keyboard: false,
        }
    );
    formModal.show();
    on_show_is_done()
}

function handleImageFileUpload(e,resizeHeight=0, on_successfull_resize) {
    let file = e.target.files[0];
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        if (file) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            // Set the image once loaded into file reader
            reader.onload = function (e1) {
                let img2    = document.createElement("img");
                img2.src    = e1.target.result;
                img2.onload = function (event) {
                    if (resizeHeight === 0) resizeHeight = img2.height
                    const h       = resizeHeight;
                    let canvas    = document.createElement("canvas");
                    let ctx       = canvas.getContext("2d");
                    let a         = 1.0 * img2.width / img2.height;
                    let w         = a * h;
                    canvas.height = h;
                    canvas.width  = w;
                    ctx.drawImage(img2, 0, 0, img2.width, img2.height , 0 , 0, canvas.width, canvas.height);
                    canvas.toBlob((blob) => {
                        const avatarFile = new File([blob], "fileName.jpg", { type: "image/jpeg" })
                        on_successfull_resize(avatarFile)
                    }, 'image/jpeg');
                }
            }
        }
    }
}

function handleImage(src,resizeHeight=0, on_successfull_resize) {
    let img2    = document.createElement("img");
    img2.src    = src;
    img2.onload = function (event) {
        if (resizeHeight === 0) resizeHeight = img2.height
        const h       = resizeHeight;
        let canvas    = document.createElement("canvas");
        let ctx       = canvas.getContext("2d");
        let a         = 1.0 * img2.width / img2.height;
        let w         = a * h;
        canvas.height = h;
        canvas.width  = w;
        ctx.drawImage(img2, 0, 0, img2.width, img2.height , 0 , 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
            const avatarFile = new File([blob], "fileName.jpg", { type: "image/jpeg" })
            on_successfull_resize(avatarFile)
        }, 'image/jpeg');
    }
}

async function handleImage2(src,resizeHeight=0) {
    let img2    = document.createElement("img");
    img2.src    = src;
    img2.onload = () => {
        if (resizeHeight === 0) resizeHeight = img2.height
        const h       = resizeHeight;
        let canvas    = document.createElement("canvas");
        let ctx       = canvas.getContext("2d");
        let a         = 1.0 * img2.width / img2.height;
        let w         = a * h;
        canvas.height = h;
        canvas.width  = w;
        ctx.drawImage(img2, 0, 0, img2.width, img2.height , 0 , 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
            const avatarFile = new File([blob], "fileName.jpg", { type: "image/jpeg" })
            console.log(`avatarFile : ${avatarFile}`)
            return(avatarFile)
        }, 'image/jpeg');
    }
}


function makeid(length) {
    let result           = "";
    let characters       = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export {
    showModal,
    showModal_with_data,
    handleImageFileUpload,
    handleImage,
    handleImage2,
    makeid,
}