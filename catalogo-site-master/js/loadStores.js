const API_URL='https://catalogodigital-jacques-default-rtdb.firebaseio.com';

function loadStores() {
	fetch ( API_URL+ '/stores.json')
	.then(response => response.json())
	.then(response => {

		for(let id in response){
			let store = response[id];

			document.getElementById('stores-list').innerHTML += 
		`
		<div class="col-md-3">
          <div class="card card-body card-customer">
            <img src="${store.image}" alt="">
          </div>
        </div>

		`

		}
	});
}

loadStores();