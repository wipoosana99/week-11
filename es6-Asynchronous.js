let dbResult;
function doFirst(){
    console.log('สั่งสินค้า');
}

function doSecond(){
    setTimeout(()=>{
    dbResult = 'username is john.';
    console.log(dbResult);
    console.log('ชำระเงิน');
    },3000);
}

function doThird(){
    console.log('รับสินค้า');
}

doFirst();
doSecond();
doThird();