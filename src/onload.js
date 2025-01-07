function initialize(){
    $.get('./voiceIndex.txt', (data) =>{
        var strFilesName ="";

        strFilesName = data;
        strsFileName = strFilesName.split('\n');

        var audiosVoice = [strsFileName.length];
    
        for(let i = 0; i < strsFileName.length; i++){
            audiosVoice[i] = new Audio('./voice/' + strsFileName[i]);
            var eleBtn = document.createElement('button');

            document.body.appendChild(eleBtn);
            eleBtn.textContent = strsFileName[i];

            eleBtn.addEventListener('click', () =>{
                audiosVoice[i].play();
            });

            audiosVoice[i].Volume = 0.3;
        }
    });
}


