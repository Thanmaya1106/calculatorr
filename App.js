// App.js
import React, { useState } from 'react';
import { View, Button, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const App = () => {
    const [value, setValue] = useState('0');
    const [bracketOpen, setBracketOpen] = useState(false);

    const handlePress = (val) => {
        if (val === 'AC') {
            setValue('0');
        } else if (val === '=') {
            try {
                if ((value.match(/\(/g) || []).length === (value.match(/\)/g) || []).length) {
                    if (value.slice(-1) === '+' || value.slice(-1) === '-' || value.slice(-1) === '*' || value.slice(-1) === '/') {
                        setValue(`${eval(value.replace('()', '(0)').slice(0, -1))}`);
                    } else {
                        setValue(`${eval(value.replace('()', '(0)') + '*1')}`);
                    }
                }
            } catch (e) {
                setValue('Format Error');
            }
        } else if (val === 'back') {
            setValue(value.slice(0, -1));
        } else if (val === '()') {
            if (value === '0') {
                setValue('(');
                setBracketOpen(true);
            } else if (value.slice(-1) === '+' || value.slice(-1) === '-' || value.slice(-1) === '*' || value.slice(-1) === '/') {
                setValue(value + '(');
                setBracketOpen(true);
            } else {
                if (bracketOpen) {
                    setValue(value + ')');
                    setBracketOpen(false);
                } else {
                    setValue(value + '(');
                    setBracketOpen(true);
                }
            }
        } else {
            if (value === '0') {
                if (val === '+' || val === '-' || val === '*' || val === '/' || val === '.' || val === '%') {
                    setValue(value + val);
                } else {
                    setValue(val);
                }
            } else if (isNaN(val)) {
                if (value.slice(-1) === '+' || value.slice(-1) === '-' || value.slice(-1) === '*' || value.slice(-1) === '/' || value.slice(-1) === '.' || value.slice(-1) === '%') {
                    setValue(value.slice(0, -1) + val);
                } else {
                    setValue(value + val);
                }
            } else {
                setValue(value + val);
            }
        }
    };

    return (
        <View style={styles.main_screen}>
            <ScrollView
                style={styles.main_screen__display}
                ref={(ref) => { this.scrollView = ref; }}
                onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}
            >
                <Text style={styles.main_screen__display_text}>
                    {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </Text>
            </ScrollView>
            <View style={styles.main_screen__keypad}>
                <View style={styles.main_screen__keypad_row}>
                    <Pressable onPress={() => handlePress('AC')}>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg1_button}>AC</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('back')}>
                        <View style={styles.btn1_outer}>
                        <Ionicons name="backspace" size={40} color="white" />
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress('%')}>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg1_button}>%</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('=')}>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg1_button}>=</Text>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.main_screen__keypad_row}>
                    <Pressable onPress={() => handlePress('7')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>7</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('8')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>8</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('9')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>9</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('/')}>
                        <View style={styles.btn2_outer}>
                        <FontAwesome5 name="divide" size={25} color='#fff' />
                        </View>
                    </Pressable>
                </View>
                <View style={styles.main_screen__keypad_row}>
                    <Pressable onPress={() => handlePress('4')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>4</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('5')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>5</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('6')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>6</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('*')}>
                        <View style={styles.btn2_outer}>
                        <Entypo name="cross" size={35} color='#fff' />
                        </View>
                    </Pressable>
                </View>
                <View style={styles.main_screen__keypad_row}>
                    <Pressable onPress={() => handlePress('1')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>1</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('2')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>2</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('3')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>3</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('-')}>
                        <View style={styles.btn2_outer}>
                            <Text style={styles.bg2_button}>-</Text>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.main_screen__keypad_row}>
                <Pressable onPress={() => handlePress('00')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>00</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('0')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>0</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('.')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>.</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('+')}>
                        <View style={styles.btn2_outer}>
                            <Text style={styles.bg2_button}>+</Text>
                        </View>
                    </Pressable>
                    
                    
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main_screen: {
        marginTop: 0,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    main_screen__display: {
        elevation: 10,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 0,
        display: 'flex',
        marginBottom: 0,
        padding: 30,
    },
    main_screen__display_text: {
        fontSize: 50,
        textAlign: 'right',
    },
    main_screen__keypad: {
        width: '100%',
        height: '70%',
        display: 'flex',
        marginBottom:-30,
    },
    main_screen__keypad_row: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    btn_outer: {
        width: 75,
        height: 75,
        backgroundColor: 'white',
        borderRadius:20,
        elevation: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg_button: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 30,
    },
    btn1_outer: {
        width: 75,
        height: 75,
        backgroundColor: '#3841e9',
        borderRadius: 20,
        elevation: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg1_button: {
        backgroundColor: '#3841e9',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    btn2_outer: {
        width: 75,
        height: 75,
        backgroundColor: 'grey',
        borderRadius: 20,
        elevation: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg2_button: {
        backgroundColor: 'grey',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
});

export default App;
