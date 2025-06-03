let a = Number(prompt(`Nhap tuoi cua ban: `));
if(14 < a && a < 18){
    alert(`du tuoi vao hoc lop 10`);
}else if(0 < a && a <= 13){
    alert('chua du tuoi vao lop 10');
}else if (a > 18){
    alert('qua gia de vao lop 10');
}else{
    alert('vui long nhap so tuoi chinh xac');
}