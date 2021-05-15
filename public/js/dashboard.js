    
const sidebarCollapse = document.getElementById('sidebarCollapse');
const sidebar = document.getElementById('sidebar');
const admin = document.getElementById('admin');
const admin2 = document.getElementById('admin2');
const accountant = document.getElementById('accountant');
const accountant2 = document.getElementById('accountant2');



$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});

admin.addEventListener('click', () =>{
    if(admin2.style.display === 'none'){
        admin2.style.display = 'block';
    }else{
        admin2.style.display = 'none';
    }
});


accountant.addEventListener('click', () =>{
    if(accountant2.style.display === 'none'){
        accountant2.style.display = 'block';
    }else{
        accountant2.style.display = 'none';
    }
});


