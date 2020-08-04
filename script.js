        document.getElementById("notMatch").style.display = "none";
        document.getElementById("match").style.display = "none";
        document.getElementById("generatePinDisplay").style.textAlign = "center";
        document.getElementById("enterPinDisplay").style.textAlign = "center";


        //generate pin button
        document.getElementById('generatePinButton').addEventListener('click', function(){
              var generatePin = Math.floor(Math.random() * 9000) + 1000;
              document.getElementById('generatePinDisplay').value = generatePin;

              document.getElementById("match").style.display = "none";
              document.getElementById("notMatch").style.display = "none";
        })


        //enter pin area
        document.getElementById('one').addEventListener('click', function(){
              document.getElementById('enterPinDisplay').value += 1;
        })
        
        document.getElementById('two').addEventListener('click', function(){
              document.getElementById('enterPinDisplay').value += 2;
        })

        document.getElementById('three').addEventListener('click', function(){
              document.getElementById('enterPinDisplay').value += 3;
        })

        document.getElementById('four').addEventListener('click', function(){
              document.getElementById('enterPinDisplay').value += 4;
        })

        document.getElementById('five').addEventListener('click', function(){
              document.getElementById('enterPinDisplay').value += 5;
        })

        document.getElementById('six').addEventListener('click', function(){
              document.getElementById('enterPinDisplay').value += 6;
        })

        document.getElementById('seven').addEventListener('click', function(){
              document.getElementById('enterPinDisplay').value += 7;
        })

        document.getElementById('eight').addEventListener('click', function(){
              document.getElementById('enterPinDisplay').value += 8;
        })

        document.getElementById('nine').addEventListener('click', function(){
              document.getElementById('enterPinDisplay').value += 9;
        })

        document.getElementById('zero').addEventListener('click', function(){
              document.getElementById('enterPinDisplay').value += 0;
        })

        document.getElementById('clear').addEventListener('click', function(){
              document.getElementById('enterPinDisplay').value = "";

              document.getElementById("match").style.display = "none";
              document.getElementById("notMatch").style.display = "none";
        })

        document.getElementById('backSpace').addEventListener('click', function(){
            const enterPinValue = document.getElementById('enterPinDisplay').value;
            document.getElementById('enterPinDisplay').value = enterPinValue.substr(0, enterPinValue.length - 1);
            
            
            document.getElementById("match").style.display = "none";
            document.getElementById("notMatch").style.display = "none";
        })
        
        
        
        //submit area
        document.getElementById('submit').addEventListener('click', function(){
            const pinGenerate = document.getElementById('generatePinDisplay').value;
            const enterPin = document.getElementById('enterPinDisplay').value;
            if(pinGenerate == enterPin){
                document.getElementById("match").style.display = "inline-block";
                document.getElementById("notMatch").style.display = "none";
            }
            else{
                document.getElementById("notMatch").style.display = "inline-block";
                document.getElementById("match").style.display = "none";
                const tryValue = document.getElementById("try").innerText;
                const decreaseValue = tryValue - 1;
                document.getElementById("try").innerText = decreaseValue;
                if(decreaseValue == 0){
                    document.getElementById('submit').disabled = true;
                    document.getElementById('submit').style.backgroundColor = "#3D4153";
                    document.getElementById('submit').style.color = "#ccc";
                    document.getElementById('submit').classList.remove("btn-animate");
                }
            }
        })