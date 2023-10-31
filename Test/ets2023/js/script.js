function getData() {
    const placeholder = document.getElementById('reivertt');
    const apiUrl = 'http://159.223.51.203:81/api/bio';

    fetch(apiUrl)
        .then(response => response.text())
        .then(data => {
            console.log(data)
            const res = JSON.parse(data);

            for(let i = 0; i < res.length; i++){
                let obj = res[i];
                const name = obj.name
                const id = obj.id
                // console.log(name,' ',  id)
                let divi = `
                <div class="col-xl-3 col-md-3 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        ${name}</div>
                                    <div class="mb-0 font-weight-bold text-gray-800">${id}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                placeholder.innerHTML = placeholder.innerHTML + divi;
            }
            
        })
        .catch(error => {
            console.error(error);
        })
}