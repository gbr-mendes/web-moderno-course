(function (height1, height2, tax1, tax2){
    if(height1 != height2){
        let shortChild;
        height1 > height2 ? shortChild = height2 : shortChild = height1;
        if(shortChild === height1){
            let height = height1
            let cont = 0
            if(tax1 > tax2){
                while(height < height2){
                    height += tax1
                    cont++
                }
                console.log(`A criança 1 vai ultrapaçar a criança 2 em ${cont} anos`)
            }else{
                console.log(`A criança menor nunca vai ultrapassar a criança maior`)
            }
        }else{
            let height = height2
            let cont = 0
            if(tax2 > tax1){
                while(height < height1){
                    height += tax2
                    cont++
                }
                console.log(`A criança 2 vai ultrapaçar a criança 1 em ${cont} anos`)
            }else{
                console.log(`A criança menor nunca vai ultrapassar a criança maior`)
            }
        }
    }
})(140, 160, 3, 0)