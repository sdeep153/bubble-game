function save_gamer_name(){
    const gamer_name = document.getElementById('gamer_name').value;
    localStorage.setItem('gamer_name', gamer_name);
}

