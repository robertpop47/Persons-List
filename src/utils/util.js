import  {readline} from 'linebyline'

const fileReader=(filePath) => readline(filePath)

export const getLineFromFile=(filePath,index)=>{
    const readLine=fileReader(filePath)
    const counter=0
    const lineToBeReturned=''
    readLine.on('line',(line)=>{
        if(counter===index){
            lineToBeReturned=line
        }
        counter++
    })

    return lineToBeReturned
}

