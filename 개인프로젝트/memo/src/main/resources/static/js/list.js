// src="https://code.jquery.com/jquery-3.6.0.min.js"
// src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"

function deleteRow(idx) {
    const row = document.querySelector(`tr[data-idx="${idx}"]`);
    if (row) {
        row.remove();
    }
}

function del(id) {
    if(!confirm('삭제 하시겠습니까?')){
        return;
    }
    let jsonObj = {'idx':id};
    let jsonStr = JSON.stringify(jsonObj)
    $.ajax({
        type: "POST",
        url: "/remove",
        contentType : "application/json; charset=utf-8",
        data:jsonStr,
        success: function(data, status, xhr) {
            if(data!=null && data!=undefined && data.result==1){
                alert(data.msg);
                window.location.replace('/list');
            }else{
                alert('삭제를 하지 못했습니다');
            }
        },
        error: function(xhr, status, error) {
            console.log("error: " + error);
            alert('삭제를 하지 못했습니다');
        }
    });
}
    function clearForm() {
        const titleInput = document.getElementById('title');
        const contentInput = document.getElementById('content');

        titleInput.value = '';
        contentInput.value = '';
}

function mod(item){
    console.log(item)
    $('#idx').val(item.idx)
    $('#title').val(item.title)
    $('#content').val(item.content)
}

$('#logoutBtn').on('click', function() {
    alert("로그아웃 되었습니다.");
    // Redirect to the logout URL
    window.location.href = '/logout'; // Replace with your actual logout URL
});