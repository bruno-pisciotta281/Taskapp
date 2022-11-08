import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container: {
flex: 1,
    backgroundColor:'#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios'? 0 : 50,
},

titleLogin1:{
color:"#004a69",
fontSize: 48,
marginBottom:10,
fontWeight: 'bold',

},

titleLogin2:{
color:"#2e8daf",
fontSize: 48,
marginBottom:10,
fontWeight: 'bold',

},

title: {
    fontSize: 48,
    marginBottom:10,
    fontWeight: 'bold',
},

input: {
    width:300,
    marginTop:10,
    padding:10,
    height:50,
    borderBottomWidth: 1,
    borderBottomColor:"#2e8daf",
    marginLeft:"auto",
    marginRight:"auto",
    color:"#4d5156",
},

buttonLogin: {
    width:200,
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#2e8daf',
    borderRadius:50,
    marginTop:30,
},

textButtonLogin: {
    color: '#ffffff',
    fontWeight: 'bold',
},

contentAlert: {
    marginTop:10,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
},

warningAlert: {
    paddingLeft:10,
    color:'#bdbdbd',
    fontSize:16,
},

registration:{
    padding:10,
    marginTop:10,
    color:'#004a69'
},

linkSubscribe:{
    color:'#2e8daf',
    fontSize:16,

}

}); 

export default styles