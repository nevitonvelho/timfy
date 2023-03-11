import React, {useState} from "react";
import { Text, View, StyleSheet, Button, Touchable, TouchableOpacity } from "react-native";


const FOCUS_TIME_MINUTES = 25.0 * 60 * 1000;
const BREAK_TIME_MINUTES = 0.1 * 60 * 1000;


export default  function Home(){

    const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
    
    const  [ timerCount, setTimerCount ] = useState<number>(FOCUS_TIME_MINUTES);
    const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null);
    const startTimer = () =>  {
        setIsTimerRunning(true)

        const id = setInterval(() => setTimerCount((prev) => prev - 1000), 1000)
        setTimerInterval(id)
    };

    const stopTimer = () => {
        if(timerInterval != null) {
            clearInterval(timerInterval)
        }

        setIsTimerRunning(false)
    }

    const timerDate = new Date(timerCount);


    return(
        <View style={styles.container}>
            <View>
                <Text>Timer</Text>
                
                <Text style={styles.cronometro}>{timerDate.getMinutes().toString().padStart(2, "0")}:{timerDate.getSeconds().toString().padStart(2, "0")}</Text>

            </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={isTimerRunning ? stopTimer : startTimer}><Text style={styles.txt}>{isTimerRunning ? 'Pausar' : 'Comerçar a concentrar-se'}</Text></TouchableOpacity>
                    {/* <Button title="Pausar" onPress={stopTimer}/> */}
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },

    cronometro:{
        color: '#0E0725',
        fontSize: 82,
    },

    button:{
        backgroundColor: '#BC00DD',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 999,
        marginHorizontal: 20,
        marginBottom: 12,
        marginTop: 50,
    },

    txt:{
        fontSize: 22,
        color: '#fff'
    }

})