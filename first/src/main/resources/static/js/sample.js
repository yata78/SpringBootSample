let resultButton = document.getElementById('omikujiButton');



resultButton.addEventListener('click', function(){
    let result = document.getElementById('result');
    // resultの子要素をループで回り、ボタン以外を削除
    Array.from(result.children).forEach(child => {
        if (child.id !== 'omikujiButton') {
            result.removeChild(child);
        }
    })

    let resultDiv = document.createElement('h3');
    resultDiv.innerHTML = omikuji()
    result.appendChild(resultDiv);
});

function omikuji() {
    var OmikujiResult = Math.floor(Math.random() * 5);
    let result
    switch(OmikujiResult){
        case 0:
            result = "大吉"
            break
        case 1:
            result = "中吉"
            break
        case 2:
            result = "小吉"
            break
        case 3:
            result = "吉"
            break
        case 4:
            result = "凶"
        default:
            return "error"
        
    }

    return result
}
