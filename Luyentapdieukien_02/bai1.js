while(true){
    let a = Number(prompt('Nhap do C: '));
    if(isNaN(a)){
        alert('Vui long nhap do C muon chuyen doi (chu so)');
    }else{
        let b = (a * 1.8) + 32;
        alert(`${a} do C chuyen sang do F la: ${b} do F`);
        break;
    
    }
        
    
}