import React, { useEffect } from 'react';
import { View, Text, Image, Animated, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import styles from './index.style'
import image1 from '../../assets/images/landing/1.png'
import image2 from '../../assets/images/landing/2.png'
import image3 from '../../assets/images/landing/3.png'
import image4 from '../../assets/images/landing/4.png'
import image5 from '../../assets/images/landing/5.png'
import image6 from '../../assets/images/landing/6.png'
import image7 from '../../assets/images/landing/7.png'
import image8 from '../../assets/images/landing/8.png'
import image9 from '../../assets/images/landing/9.png'
import image10 from '../../assets/images/landing/10.png'
import image11 from '../../assets/images/landing/11.png'
import image12 from '../../assets/images/landing/12.png'
import elipse from '../../assets/images/landing/elipse.png'

const Landing = () => {

    // const row1AnimationValue = React.useRef(new Animated.Value(0)).current;

    var num = 0;
    var loop = 0;

    state = {
        animation: new Animated.Value(-30),
        animation2: new Animated.Value(-30),

        animation3: new Animated.Value(-60),
        animation4: new Animated.Value(-60),

        animation5: new Animated.Value(-90),
        animation6: new Animated.Value(-90),
      };

      //TOP IMAGE ROW
     
        startAnimation = () => {
            Animated.loop(
                Animated.parallel([
                Animated.timing(this.state.animation, {
                    toValue: num - 40,
                    duration: 1500,
                    useNativeDriver: true,
                }),
                Animated.timing(this.state.animation2, {
                    toValue: num - 40,
                    duration: 1500,
                    useNativeDriver: true,
                })]
                ).start(({finished}) => {
                    Animated.parallel([
                        Animated.timing(this.state.animation, {
                            toValue: num - 60,
                            duration: 1500,
                            useNativeDriver: true,
                            delay: 400
                        }),
                        Animated.timing(this.state.animation2, {
                            toValue: num - 60,
                            duration: 1500,
                            useNativeDriver: true,
                            delay: 400
                        })
                    ]).start(({finished}) => {
                        Animated.parallel([
                            Animated.timing(this.state.animation, {
                                toValue: num - 80,
                                duration: 1500,
                                useNativeDriver: true,
                                delay: 400
                            }),
                            Animated.timing(this.state.animation2, {
                                toValue: num - 80,
                                duration: 1500,
                                useNativeDriver: true,
                                delay: 400
                            })
                        ]).start(({finished}) =>{
                            Animated.parallel([
                                Animated.timing(this.state.animation, {
                                    toValue: -40,
                                    duration: 1500,
                                    useNativeDriver: true,
                                    delay: 400
                                }),
                                Animated.timing(this.state.animation2, {
                                    toValue: -40,
                                    duration: 1500,
                                    useNativeDriver: true,
                                    delay: 400
                                })
                            ]).start();
                        });
                    });
 
                })).start()
        };
        if (loop < 10) {
            // startAnimation(); 
        }
        // startAnimation(); 

        // while (loop == 1) {
        //     startAnimation();   
        // }
   
    //   startAnimation = () => {

    //     Animated.stagger(500, [
    //         Animated.parallel([
    //         Animated.timing(this.state.animation, {
    //             toValue: num,
    //             duration: 1500,
    //             useNativeDriver: true,
    //         }),
    //         Animated.timing(this.state.animation2, {
    //             toValue: num - 10,
    //             duration: 1500,
    //             useNativeDriver: true,
    //         })]
    //         )]).start(({finished}) => {
    //             Animated.parallel([
    //                 Animated.timing(this.state.animation, {
    //                     toValue: num - 100,
    //                     duration: 1500,
    //                     useNativeDriver: true,
    //                     delay: 1000
    //                 }),
    //                 Animated.timing(this.state.animation2, {
    //                     toValue: num - 100,
    //                     duration: 1500,
    //                     useNativeDriver: true,
    //                     delay: 1000
    //                 })
    //             ]).start(({finished}) => {
    //                 Animated.parallel([
    //                     Animated.timing(this.state.animation, {
    //                         toValue: num - 200,
    //                         duration: 1500,
    //                         useNativeDriver: true,
    //                         delay: 1000
    //                     }),
    //                     Animated.timing(this.state.animation2, {
    //                         toValue: num - 200,
    //                         duration: 1500,
    //                         useNativeDriver: true,
    //                         delay: 1000
    //                     })
    //                 ]).start(({finished}) =>{
    //                     Animated.parallel([
    //                         Animated.timing(this.state.animation, {
    //                             toValue: 0,
    //                             duration: 1500,
    //                             useNativeDriver: true,
    //                             delay: 1000
    //                         }),
    //                         Animated.timing(this.state.animation2, {
    //                             toValue: 0,
    //                             duration: 1500,
    //                             useNativeDriver: true,
    //                             delay: 1000
    //                         })
    //                     ]).start();
    //                 });
    //             });

    //         // this.state.animation.setValue(0);
    //         // this.state.animation2.setValue(0);
    //     }, []);

    //     // Animated.loop(
    //     //     Animated.parallel([
    //     //     Animated.timing(this.state.animation, {
    //     //     toValue: num,
    //     //     duration: 1500,
    //     //     useNativeDriver: true,
    //     //     }),
    //     //     Animated.timing(this.state.animation2, {
    //     //     toValue: -110,
    //     //     duration: 1500,
    //     //     useNativeDriver: true,
    //     //     })
    //     // ]), {iterations: 2}).start(() => {
    //     //     num+= -50;
    //     //     this.state.animation.setValue(0);
    //     //     this.state.animation2.setValue(0);
    //     // });
    //   }
        

      const animatedStyles = {
        transform: [
            {translateY: this.state.animation},
            {translateX: this.state.animation2},
            { rotate: '35deg'}
        ]
      }

      const animatedStyles2 = {
        transform: [
            {translateY: this.state.animation3},
            {translateX: this.state.animation4},
            { rotate: '35deg'}
        ]
      }

      const animatedStyles3 = {
        transform: [
            {translateY: this.state.animation5},
            {translateX: this.state.animation6},
            { rotate: '35deg'}
        ]
      }
      
    // const row2AnimationValue = React.useRef(new Animated.Value(0)).current;
    // const row3AnimationValue = React.useRef(new Animated.Value(0)).current;
    return (
        <>
            <Stack.Screen options={{  headerShown: false }} />
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <View style={styles.imgContainer}>
                        <TouchableWithoutFeedback onPress={this.startAnimation}>
                            <Animated.View style={[styles.imgRow, animatedStyles]}>
                                <Image source={image1} style={styles.sideImg} resizeMode='contain' />
                                <Image source={image2} style={styles.sideImg} resizeMode='contain' />
                                <Image source={image3} style={styles.sideImg} resizeMode='contain' />
                                <Image source={image4} style={styles.sideImg} resizeMode='contain' />
                            </Animated.View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={this.startAnimation2}>
                            <Animated.View style={[styles.imgRow, animatedStyles2]}>
                                <Image source={image5} style={styles.sideImg} resizeMode='contain' />
                                <Image source={image6} style={styles.sideImg} resizeMode='contain' />
                                <Image source={image7} style={styles.sideImg} resizeMode='contain' />
                                <Image source={image8} style={styles.sideImg} resizeMode='contain' />
                            </Animated.View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={this.startAnimation3}>
                            <Animated.View style={[styles.imgRow, animatedStyles3]}>
                                <Image source={image9} style={styles.sideImg} resizeMode='contain' />
                                <Image source={image10} style={styles.sideImg} resizeMode='contain' />
                                <Image source={image11} style={styles.sideImg} resizeMode='contain' />
                                <Image source={image12} style={styles.sideImg} resizeMode='contain' />
                            </Animated.View>
                        </TouchableWithoutFeedback>

                    </View>
                    

                </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.headerText}>
                            Your Travel Companion
                        </Text>

                        <Text style={styles.subText}>
                            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        </Text>
                    </View>

                    <View style={styles.bottomContainer}>
                        <View style={styles.w50}>
                            <Image source={elipse} resizeMode='cover' style={styles.elipseImg} />
                        </View>
                        
                        <View style={styles.w50}>
                            <TouchableOpacity style={styles.nextBtn}>
                                <Text style={styles.btnText}>
                                    Next
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
            </View>
        </>
        
    )
}

export default Landing