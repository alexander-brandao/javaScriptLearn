
// tabuada do 1..10

for(var y = 1; y <= 10; y++){
   
    document.write('Tabuada do ' + y + '<br />')

    for(var x = 1; x<= 10; x++){
        
        document.write( y + ' x ' + x + ' = ' + (y*x) + '<br />')
        
    }

    document.write('<hr />')
}