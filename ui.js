class UI{
    constructor(){
        this.submited_pics = document.querySelector('#submited_pics');
    }

    showPics(){

        fetch('userspics.json')
            .then(res => res.json())
            .then(data => {
                let out = '';

        data.forEach(user => {
            out += `
            <img src="${user.pic_location}" class="img-fluid mb-2">
            <br>
            <div>
                <span>${user.name} on ${user.uploaded_at}</span>
                <span>${user.caption}</span>
            </div>
            <button class="btn btn-success">
                <a href="${user.votes}">Up!</a> 
            </button>
            <span>${user.total_votes}</span>
                
            `
            });
        this.submited_pics.innerHTML = out;
    
        })
            .catch(err => submited_pics.innerHTML = err);
    }

}