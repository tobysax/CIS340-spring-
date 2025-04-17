// Importing React and the View component from react-native
import React from 'react';
import { View } from 'react-native';

// Main functional component named App
export default function App() {

    return(
        <View style ={{
                flex: 1,
                flexDirection: 'row',
        
            }}>

             {/*First box: PowderBlue, 50x50 pexels*/}
                <View style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'PowderBlue'
                }}/>
            
                {/*second box: pink, 50x50 pexels*/}
                <View style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'pink'
                }}/>
            
                {/*third box: green, 50x50 pexels*/}
                <View style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'white'
                }}/>

                 {/*fourth box: pink, 50x50 pexels*/}
                 <View style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'pink'
                }}/>

                {/*Fifth box: PowderBlue, 50x50 pexels*/}
                <View style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'PowderBlue'
                }}/>


            </View>

    );


}
