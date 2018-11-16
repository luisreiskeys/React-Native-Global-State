I've created this project to show one technique that I developed to replace the use of redux as global state management  in React Native.

This technique do not needs any third party module, just React-Native code, but i use the react-navigation módulo to show that`s works globaly, and may be used to pass props betwen screens if your project is using react-navigations 

keep in mind that this technique not work exactly how the Redux, you need pass the global obj to the components as a prop. But works pretty well.

To get start read the  [a GetStartGuide.md](GetStartGuide.md) file.

To this project i use a obj with 3 levels, but it's works with any kind obj

This is the sample obj

export const gState = {

    Counters:{
    
        secondLevelCounter:0,
        
        SecondLevelCounters:{
        
            thirdLevelCounter:0
            
        }
        
    },
    
    firstLevelCounter:0,
}


![](demo.gif)

I hope you guys enjoy.
Fell free to send suggest.
