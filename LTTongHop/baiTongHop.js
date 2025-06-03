let check = true;
while (check) {
    let choice = Number(prompt(
        `Xin vui long nhap lua chon tu 1-10:
        Lua chon 1: Nhap Ten
        Lua chon 2: Nhap Tuoi
        Lua chon 3: Hien thi Ten va Tuoi da nhap
        Lua chon 4: Hien thi bang cuu chuong cua 1 so
        Lua chon 5: Kiem tra so nhap vao la so chan hay le
        Lua chon 6: Tinh tong cac so tu 1 den N
        Lua chon 7: In cac so trong mot day so
        Lua chon 8: Kiem tra so nhap vao co phai so nguyen to khong
        Lua chon 9: in chuoi dao nguoc cua mot day so
        Lua chon 10: Thoat!`));

    if (0 < choice && choice < 11) {
        switch (choice) {
            case 1:
                var name = prompt('Nhap ten: ');
                break;
            case 2:
                let checkcase3 = true;
                while (checkage) {
                    var age = Number(prompt('Nhap tuoi: '));
                    if (isNaN(age)) { alert('Vui long nhap tuoi la con so'); }
                    else {
                        checkage = false;
                    }
                }
                break;
            case 3:
                alert(`Ten cua nguoi dung: ${name} \nTuoi cua nguoi dung: ${age}`);
                break;
            case 4:
                let checkcase4 = true;
                while (checkcase4) {
                    let case4Number = Number(prompt('Nhap mot so tu 1-10'));
                    let result;
                    let bangcuuchuong = ``;
                    if (0 < case4Number && case4Number <= 10) {
                        checkcase4 = false;                        
                        for (i = 1; i <= 10; i++){
                            result = i * case4Number;
                            bangcuuchuong += `${case4Number} x ${i} = ${result}\n`;
                        }
                        alert(`bang cuu chuong cua ${case4Number} la:\n` +bangcuuchuong);
                    } else {
                        alert(`Vui long nhap con so tu 1 den 10!`);
                        
                    }
                }
                break;
            case 5:
                let checkcase5 = true;
                while (checkcase5) {
                    let case5Number = Number(prompt(`Nhap so muon kiem tra`));
                    if (isNaN(case5Number)) {
                        alert('Vui long nhap du lieu la chu so!');
                    } else {
                        checkcase5 = false;
                        if (case5Number % 2 == 0) {
                            alert(`${case5Number} la so chan`);
                        } else {
                            alert(`${case5Number} la so le`);
                        }
                    }
                }
                break;
            case 6:
                let checkcase6 = true;
                let tongCase5 = 0;
                while (checkcase6) {
                    let n = Number(prompt(`vui long nhap N: `));
                    if (isNaN(n)) {
                        alert(`vui long nhap N la con so`);
                    } else {
                        checkcase6 = false;
                        for (i = 1; i <= n; i++){
                            tongCase5 = tongCase5 + i;
                        }
                        alert(`Tong cac so tu 1 den ${n} la: ${tongCase5}`);
                    }
                }
                break;
            case 7:
                let checkcase7 = true;
                while (checkcase7) {
                    var case7Number = Number(prompt(`Nhap day so:`));
                    if (isNaN(case7Number)) {
                        alert(`Vui long nhap mot day so`);
                    } else {
                        checkcase7 = false;
                    }
                }
                let case7String = case7Number.toString();
                let case7NumberSplit = [...case7String];
                alert(`cac so trong chuoi la: ${case7NumberSplit}`);
                break;
            case 8:
                let checkcase8 = true;
                while (checkcase8) {
                    var case8Number = Number(prompt(`Nhap so:`));
                    if (isNaN(case8Number)) {
                        alert(`Vui long nhap mot so`);
                    } else {
                        let countCase8 = 0;
                        checkcase8 = false;
                        if (case8Number < 2) {
                            alert(`${case8Number} khong phai so nguyen to`);
                        } else if (case8Number === 2) {
                            alert(`${case8Number} la so nguyen to`);
                        } else {
                            for (let i = 1; i <= case8Number; i++) {
                                if (case8Number % i === 0) {
                                    countCase8++;
                                }
                            }
                            if (countCase8 === 2) {
                                alert(`${case8Number} la so nguyen to`);
                            } else {
                                alert(`${case8Number} khong phai so nguyen to`);
                            }
                        }
                    }
                }
                break;
            case 9:
                let case9String = prompt(`Nhap mot chuoi ma ban muon dao nguoc:`);
                let case9Array = case9String.split("");
                let case9ArrayReverse = case9Array.reverse();
                let case9Result = case9ArrayReverse.join("");
                alert(`Chuoi ${case9String} dao nguoc thanh: ${case9Result}`);

                break;
            case 10:
                alert(`Thoat chuong trinh!`);
                check = false;
                break;
        }
    }
    else {
        alert(`Vui long nhap lua chon tu 1 den 10!`);
    }
        
}